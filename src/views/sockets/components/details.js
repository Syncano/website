import {connect} from 'zefir/utils'
import Markdown from '../../../components/ui/markdown'
import Hexagon from './hexagon'
import get from 'lodash.get'

const Details = ({stores: {sockets: store}}) => (
  <div className='Details'>
    <div className='Details__header'>
      <div className='Details__header-symbol'>
        <Hexagon />
      </div>
      <div>
        <h2 className='Details__header-title'>{get(store, 'details.name')}</h2>
        <div className='Details__header-author'>
          by <span>{get(store, 'details.author.display_name', '').split('@')[0]}</span>
        </div>
      </div>
    </div>
    <div className='Details__content'>
      <Markdown
        content={buildDocumentation(get(store, 'details.config', {}))}
        />
    </div>

    <style jsx>{`
      .Details__header {
        background-color: #f5f6f9;
        padding: 15px 20px;
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
        overflow: auto;
      }

      @media screen and (min-width: 490px) {
        .Details__header {
          padding: 30px;
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
          padding: 50px 70px;
        }

        .Details__header > :global(*) + :global(*) {
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
  config, classes, endpoints, event_handlers, events, description
}) {
  let result = `${description} \n`
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
            const {type, example, description} = key.parameters[parameter]
            result += `${parameter || ''}|${type || '&mdash;'}|${description || '&mdash;'}|${
              ['object', 'array'].indexOf(typeof example) >= 0
                ? JSON.stringify(example, null)
                : example || '&mdash;'
            }\n`
          })
        }

        if (key.response) {
          result += `#### Response \n\n`

          if (key.response.mimetype) {
            result += `**Type:** ${key.response.mimetype} \n\n`
          }

          key.response.examples.forEach(example => {
            result += `\`\`\`\n${example.example}\n\`\`\`\n\n`

            if (example.exit_code) {
              result += `**Exit code:** ${example.exit_code}\n\n`
            }
            if (example.description) {
              result += `**Description:** ${example.description}\n\n`
            }
          })
        }
      })
    }
  })

  return result
}

export default connect(Details)
