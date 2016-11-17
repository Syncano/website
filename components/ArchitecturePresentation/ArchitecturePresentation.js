import React, { Component } from 'react';

class ArchitecturePresentation extends Component {
  enableScrollWheel = () => {
    const bodyElement = document.querySelector('body');
    bodyElement.style.overflow = null;
  };

  disableScrollWheel = () => {
    const bodyElement = document.querySelector('body');
    bodyElement.style.overflow = 'hidden';
  };

  render() {
    return (
      <div className="architecture-presentation">
        <canvas
          id="renderCanvas"
          className="architecture-presentation__canvas"
          onMouseEnter={this.disableScrollWheel}
          onMouseLeave={this.enableScrollWheel}
        />
        <div
          id="overlay"
          className="architecture-presentation__overlay"
        />
        <script src="/serverless-architecture/scripts/hand-1.js" />
        <script src="/serverless-architecture/scripts/babylon.js" />
        <script src="/serverless-architecture/scripts/bGUI-1.3.1.js" />
        <script src="/serverless-architecture/scripts/babylon.objFileLoader.js" />
        <script src="/serverless-architecture/scripts/bundle.js" />
      </div>
    );
  };
};

export default ArchitecturePresentation;
