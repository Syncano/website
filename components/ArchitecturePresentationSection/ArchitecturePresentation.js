import React, { Component } from 'react';

class ArchitecturePresentation extends Component {
  componentDidMount() {
    const scriptSrcs = [
      '/serverless-architecture/scripts/hand-1.js',
      '/serverless-architecture/scripts/babylon.js',
      '/serverless-architecture/scripts/bGUI-1.3.1.js',
      '/serverless-architecture/scripts/babylon.objFileLoader.js',
      '/serverless-architecture/scripts/bundle.js'
    ];

    _.forEach(scriptSrcs, (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;

      document.body.appendChild(script);
    });
  };

  enableScrollWheel = () => {
    document.body.style.overflow = null;
  };

  disableScrollWheel = () => {
    document.body.style.overflow = 'hidden';
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
      </div>
    );
  };
};

export default ArchitecturePresentation;
