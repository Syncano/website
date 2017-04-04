import {Children} from 'react'

const Nav = ({children, stack}) => (
  <div>
    <ul className={`nav ${stack ? 'nav--stack' : ''}`}>
      {Children.map(children, Item => (
        <li>
          {Item}
        </li>
      ))}
    </ul>

    <style jsx>{`
      .nav {
        display: flex;
        list-style: none;
      }

      .nav--stack {
        flex-direction: column;
      }
    `}</style>
  </div>
)

export default Nav
