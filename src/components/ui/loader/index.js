import React from 'react'
import Icon from './icon.svg'

const Loader = () => (
  <div>
    <Icon />

    <style jsx>{`
      div {
        margin: 0 0 2em;
        height: 100px;
        width: 20%;
        text-align: center;
        padding: 1em;
        margin: 0 auto 1em;
        display: inline-block;
        vertical-align: top;
      }

      div :global(svg) :global(path),
      div :global(svg) :global(rect) {
        fill: rgb(76, 56, 208);
      }
    `}</style>
  </div>
)

export default Loader
