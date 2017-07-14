import {connect} from 'zefir/utils'
import Markdown from '../../../components/ui/markdown'
import Loader from '../../../components/ui/loader'
import Hexagon from './hexagon'
import get from 'lodash.get'

const Details = ({store, pending}) => (
  <div className='Details'>
    {pending.has('sockets.fetchSocket') ? (
      <div className='Details__loading'>
        <Loader />
      </div>
    ) : (
      <div>
        <div className='Details__header'>
          <div className='Details__header-inner'>
            <div className='Details__header-symbol'>
              <Hexagon />
            </div>
            <div>
              <h2 className='Details__header-title'>{get(store, 'details.name')}</h2>
              <div className='Details__header-author'>
                by <span>{get(store, 'details.author', '')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='Details__content'>
          <Markdown
            content={buildDocumentation(get(store, 'details.config', {}))}
            />
        </div>
      </div>
    )}

    <style jsx>{`
      .Details {
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .Details > * {
        width: 100%;
      }

      .Details__loading {
        text-align: center;
        padding: 100px 0;
      }
      .Details__header {
        background-color: #f5f6f9;
        padding: 15px 20px;
      }

      .Details__header-inner {
        display: flex;
      }

      .Details__header-symbol {
        display: none;
      }

      .Details__header-title {
        font-size: 18px;
        font-weight: 500;
        color: #0b0f15;
      }

      .Details__header-author {
        color: #7a7f87;
        font-size: 14px;
        margin-top: 3px;
      }

      .Details__header-author span {
        color: #2f3339;
      }

      .Details__content {
        padding: 15px;
        max-width: 1040px;
        margin-left: auto;
        margin-right: auto;
      }

      .Details__content :global(p)),
      .Details__content :global(h4),
      .Details__content :global(pre),
      .Details__content :global(table) {
        margin-left: 30px;
      }

      .Details__content :global(pre:first-of-type) {
        margin-top: 0;
        margin-bottom: 30px;
        margin-left: 0;
      }

      .Details__content :global(p:first-of-type) {
        margin-left: 0;
      }

      @media screen and (min-width: 490px) {
        .Details__header {
          padding: 30px;
        }

        .Details__header-inner {
          max-width: 870px;
          margin-left: auto;
          margin-right: auto;
        }

        .Details__header-title {
          font-size: 24px;
        }

        .Details__header-author {
          font-size: 16px;
        }

        .Details__content {
          padding: 30px;
        }
      }

      @media screen and (min-width: 850px) {
        .Details__header {
          padding: 50px 100px;
        }

        .Details__header-inner > :global(*) + :global(*) {
          margin-left: 30px;
        }

        .Details__header-symbol {
          display: inline-block;
        }

        .Details__header-title {
          font-size: 32px;
        }

        .Details__content {
          padding: 50px 100px;
        }
      }
    `}</style>
  </div>
)

function buildDocumentation ({
  name, config, classes, endpoints, event_handlers, events, description
}) {
  let result = ''
  result += `\`\`\`\nsyncano-cli add ${name}\n\`\`\`\n\n`
  result += `${description} \n`
  const sections = [
    {
      title: 'Config',
      data: config
    },
    // {
    //   title: 'Classes',
    //   data: classes
    // },
    {
      title: 'Endpoints',
      data: endpoints
    },
    {
      title: 'Events',
      data: events
    },
    {
      title: 'Event handlers',
      data: event_handlers
    }
  ]

  sections.forEach(({data, title}) => {
    if (data && Object.keys(data).length) {
      result += `## ${title} \n`

      Object.keys(data).forEach(name => {
        const key = data[name]

        result += `### ${name} \n`
        result += `${key.description || ''} \n\n`

        if (Object.keys(key.parameters || {}).length) {
          result += `#### Parameters \n\n`
          result += '|Name|Type|Description|Example|\n'
          result += '|----|----|-----------|-------|\n'

          Object.keys(key.parameters).forEach(parameter => {
            let {type, example, description} = key.parameters[parameter]

            try {
              if (typeof example === 'string' && example.match(/^\{|\[/))
                example = JSON.parse(example)
            } catch (err) {}

            result += `${parameter || ''}|${type || '&mdash;'}|${description || '&mdash;'}|${
              ['object', 'array'].indexOf(typeof example) >= 0
                ? JSON.stringify(example, null)
                : typeof example === 'string'
                ? `\`${example.replace(/\n/g, '')}\``
                : example || '&mdash;'
            }\n`
          })
        }

        if (key.response) {
          result += `#### Response \n\n`

          if (key.response.mimetype) {
            result += `**Type:** ${key.response.mimetype} \n\n`
          }

          if (key.response.examples) {
            key.response.examples
              .filter(item => typeof item.example === 'string')
              .forEach(example => {
                let code
                example.example = example.example.replace(/\n+$/, '')

                try {
                  code = JSON.parse(example.example)
                  code = JSON.stringify(code, null, 2)
                } catch (e) {
                  code = example.example
                }

                result += `\`\`\`\n${code}\n\`\`\`\n\n`

                if (example.exit_code) {
                  result += `**Exit code:** ${example.exit_code}\n\n`
                }
                if (example.description) {
                  result += `**Description:** ${example.description}\n\n`
                }
            })
          }
        }
      })
    }
  })

  return result
}

Details.init = ({
  router: {route: {match: {params}}},
  stores: {sockets: store, pending},
  services: {sockets}
}) => {
  sockets.fetchSocket({
    name: params.socketName
  })

  return {store, pending}
}

export default connect(Details)
