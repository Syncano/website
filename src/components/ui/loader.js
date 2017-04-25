import React from 'react'

const Loader = () => (
  <div>
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24px' height='30px' viewBox='0 0 24 30' style={{
      enableBackground: 'new 0 0 50 50'
    }}>
      <rect x='0' y='10' width='4' height='10' fill='#333' opacity='0.2'>
        <animate attributeName='opacity' attributeType='XML' values='0.2; 1; .2' begin='0s' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='height' attributeType='XML' values='10; 20; 10' begin='0s' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='y' attributeType='XML' values='10; 5; 10' begin='0s' dur='0.6s' repeatCount='indefinite' />
      </rect>
      <rect x='8' y='10' width='4' height='10' fill='#333' opacity='0.2'>
        <animate attributeName='opacity' attributeType='XML' values='0.2; 1; .2' begin='0.15s' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='height' attributeType='XML' values='10; 20; 10' begin='0.15s' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='y' attributeType='XML' values='10; 5; 10' begin='0.15s' dur='0.6s' repeatCount='indefinite' />
      </rect>
      <rect x='16' y='10' width='4' height='10' fill='#333' opacity='0.2'>
        <animate attributeName='opacity' attributeType='XML' values='0.2; 1; .2' begin='0.3s' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='height' attributeType='XML' values='10; 20; 10' begin='0.3s' dur='0.6s' repeatCount='indefinite' />
        <animate attributeName='y' attributeType='XML' values='10; 5; 10' begin='0.3s' dur='0.6s' repeatCount='indefinite' />
      </rect>
    </svg>

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

      svg path,
      svg rect{
        fill: rgb(76, 56, 208);
      }
    `}</style>
  </div>
)

export default Loader
