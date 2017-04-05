import React from 'react'

const Menu = ({children}) => (
  <ul className='Menu'>
    {React.Children.map(children, item => (
      <li className='Menu__item'>{item}</li>
    ))}

    <style jsx>{`
      .Menu {
        list-style: none;
      }

      .Menu__item {
        display: flex;
        align-items: center;
      }

      .Menu__item > :global(*) {
        flex: 1;
      }

      .Menu__item::before {
        padding-left: 15px;
        content: '\\f016';
        font-family: FontAwesome;
        font-size: 14px;
        color: rgba(122, 127, 135, .5);
      }

      .Menu__item + * {
        border-top: solid 1px #e5e5e5;
      }

      .Menu :global(a) {
        text-decoration: none;
        font-size: 14px;
        color: #2f3339;
        padding: 15px;
        display: flex;
        align-items: center;
      }

      .Menu :global(.active) {
        font-weight: 500;
        color: #0b0d11;
      }

      .Menu :global(.active::after) {
        content: '\\f054';
        margin-left: auto;
        margin-bottom: -2px;
        font-family: FontAwesome;
        font-size: 12px;
        color: #0b0d11;
      }
    `}</style>
  </ul>
)

export default Menu
