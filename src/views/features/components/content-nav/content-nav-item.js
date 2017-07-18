import {connect} from 'zefir/utils'
import {scrollTo} from '../../helpers'
import {Component} from 'react'
import Icon0 from './icon-0.svg'
import Icon1 from './icon-1.svg'
import Icon2 from './icon-2.svg'
import Icon3 from './icon-3.svg'

class ContentNavItem extends Component {
  renderIcon(section) {
    const contentNavIcons = [Icon0, Icon1, Icon2, Icon3]

    return contentNavIcons[section]
  }

  render () {
    const {activeSection} = this.props.featuresPage
    const {text, sectionId, section } = this.props
    const isActive = activeSection === section ? 'is-active' : ''
    const Icon = this.renderIcon(section)

    return (
      <div
        className={`ContentNav__item ${isActive}`}
        onClick={() => { scrollTo(sectionId) }}
      >
        <div>
          <Icon />
          <div className='ContentNav__item-text'>{text}</div>
        </div>

        <style jsx>{`
          .ContentNav__item {
            text-align: center;
            flex: 1;
            text-align: center;
            font-size: 18px;
            padding: 15px 0 15px 0;
            cursor: pointer;
            box-shadow: 0 4px 0 rgba(0, 0, 0, 0);
            transition: box-shadow .6s ease
          }

          .ContentNav__item :global(svg) {
            width: 40%;
            transition-property: width, height, opacity;
            transition-duration: .25s;
          }

          .ContentNav__item-text {
            margin-top: 15px;
            display: none;
          }

          :global(.sticky) .ContentNav__item {
            padding: 7px 0;
          }

          @media screen and (min-width: 720px) {
            .ContentNav__item {
              padding-bottom: 30px;
            }

            .ContentNav__item-text {
              display: block;
            }

            :global(.sticky) .ContentNav__item :global(svg) {
              width: 0;
              height: 0;
              opacity: 0;
            }


            :global(.sticky) .ContentNav__item {
              padding-top: 0;
              padding-bottom: 15px;
            }
          }

          .ContentNav__item + * {
            border-left: 1px solid;
            border-image-source: linear-gradient(to bottom, rgba(229, 229, 229, 0) 20%, #e5e5e5);
            border-image-slice: 1;
          }

          .ContentNav__item:nth-child(1).is-active {box-shadow: 0 4px 0 rgba(0, 155, 172, 1)}
          .ContentNav__item:nth-child(2).is-active {box-shadow: 0 4px 0 rgba(54, 55, 209, 1)}
          .ContentNav__item:nth-child(3).is-active {box-shadow: 0 4px 0 rgba(23, 101, 235, 1)}
          .ContentNav__item:nth-child(4).is-active {box-shadow: 0 4px 0 rgba(81, 0, 208, 1)}

          :global(.sticky) .ContentNav {
            background-color: #fff;
          }

          :global(.sticky) .ContentNav__item-text {
            margin-top: 0;
          }
        `}</style>
      </div>
    )
  }
}

ContentNavItem.init = ({
  section,
  sectionId,
  text,
  stores: {featuresPage}
}) => ({
  section,
  sectionId,
  text,
  featuresPage
})

export default connect(ContentNavItem)
