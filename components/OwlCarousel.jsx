import React from 'react';

const isBrowser = typeof window !== 'undefined';
isBrowser ? require('../node_modules/owl-carousel-2/owl.carousel.min.js') : undefined;
require('../node_modules/owl-carousel-2/assets/owl.carousel.min.css');

export default React.createClass({

  getDefaultProps() {
    return {
      options : {
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1,
            autoHeight: true
          },
          480: {
            autoHeight: false,
            items: 6,
            autoWidth: true
          }
        }
      },
      style : {}
    };
  },

  componentDidMount() {
    $(React.findDOMNode(this)).owlCarousel(this.props.options);
    $(React.findDOMNode(this)).trigger('add.owl.carousel', []);
  },

  componentWillReceiveProps(nextProps) {
    $(React.findDOMNode(this)).trigger('destroy.owl.owlCarousel');
  },

  componentDidUpdate(prevProps, prevState) {
    $(React.findDOMNode(this)).owlCarousel(this.props.options);
  },

  componentWillUnmount() {
    $(React.findDOMNode(this)).trigger('destroy.owl.owlCarousel');
  },

  render() {
    this.props.options.touchDrag !== false ?	React.initializeTouchEvents(true) : React.initializeTouchEvents(false);

    return (
      <div id={this.props.id} style={this.props.style} className="owl-carousel about-us-carousel">
        {this.props.children}
      </div>
    );
  },

  next() {
    $(React.findDOMNode(this)).data('owlCarousel').next();
  },

  prev() {
    $(React.findDOMNode(this)).data('owlCarousel').prev();
  },

  // Go to x slide
  goTo(x) {
    $(React.findDOMNode(this)).data('owlCarousel').goTo(x);
  },

  // Go to x slide without slide animation
  jumpTo(x) {
    $(React.findDOMNode(this)).data('owlCarousel').jumpTo(x);
  },

  play() {
    $(React.findDOMNode(this)).data('owlCarousel').play();
  },

  stop() {
    $(React.findDOMNode(this)).data('owlCarousel').stop();
  }

});
