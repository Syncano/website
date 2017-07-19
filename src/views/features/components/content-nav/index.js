import {observer} from "mobx-react";
import {scrollTo} from '../../helpers'
import ContentNavItem from './content-nav-item'

const ContentNav = () => (
  <div className='ContentNav'>
    <ContentNavItem
      text='Automation SDK'
      sectionId='AutomationSDKSection'
      section={0}
    />
    <ContentNavItem
      text='Socket Registry'
      sectionId='RegistriesSection'
      section={1}
    />
    <ContentNavItem
      text='Cloud OS'
      sectionId='CloudOsSection'
      section={2}
    />
    <ContentNavItem
      text='Community'
      sectionId='CommunitySection'
      section={3}
    />


    <style jsx>{`
      .ContentNav {
        display: flex;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 1;
      }

      :global(.sticky) .ContentNav {
        background-color: #fff;
      }
    `}</style>
  </div>
)

export default ContentNav
