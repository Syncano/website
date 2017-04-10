import Icon1 from './icon-1.svg'
import Icon2 from './icon-2.svg'
import Icon3 from './icon-3.svg'
import Icon4 from './icon-4.svg'

const ContentNav = () => (
  <div className='ContentNav'>
    <div className='ContentNav__item is-active'>
      <Icon1 />
      <div className='ContentNav__item-text'>Automation SDK</div>
    </div>
    <div className='ContentNav__item'>
      <Icon2 />
      <div className='ContentNav__item-text'>Socket Registry</div>
    </div>
    <div className='ContentNav__item'>
      <Icon3 />
      <div className='ContentNav__item-text'>Cloud OS</div>
    </div>
    <div className='ContentNav__item'>
      <Icon4 />
      <div className='ContentNav__item-text'>Community</div>
    </div>

    <style jsx>{`
      .ContentNav {
        display: flex;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 1;
      }

      .ContentNav__item {
        text-align: center;
        flex: 1;
        text-align: center;
        font-size: 18px;
        padding: 0 0 15px 0;
        cursor: pointer;
      }

      .ContentNav__item :global(svg) {
        width: 40%;
      }

      .ContentNav__item.is-active {
        box-shadow: 0 4px 0;
      }

      .ContentNav__item-text {
        margin-top: 15px;
        display: none;
      }

      @media screen and (min-width: 720px) {
        .ContentNav__item {
          padding-bottom: 30px;
        }

        .ContentNav__item-text {
          display: block;
        }
      }

      .ContentNav__item + * {
        border-left: 1px solid;
        border-image-source: linear-gradient(to bottom, rgba(229, 229, 229, 0) 20%, #e5e5e5);
        border-image-slice: 1;
      }

      .ContentNav__item:nth-child(1) {color: #009bac}
      .ContentNav__item:nth-child(2) {color: #3637d1}
      .ContentNav__item:nth-child(3) {color: #1765eb}
      .ContentNav__item:nth-child(4) {color: #5100d0}
    `}</style>
  </div>
)

export default ContentNav
