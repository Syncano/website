import React from 'react';

export default React.createClass({

  getDefaultProps() {
    return {
      arrow: 'down'
    }
  },

  render() {
    let arrow = this.props.arrow;
    let item = this.props.item;
    let title = this.props.title;
    let image = this.props.image;

    return (
      <div className="links social-share">
        <div className={`arrow-${arrow}`}></div>
        <a className="fa fa-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=http://www.syncano.com/blog${item.path}`} target="_blank"></a>
        <a className="fa fa-twitter" href={`https://twitter.com/intent/tweet?text=Blog&url=http://www.syncano.com/blog${item.path}`} target="_blank"></a>
        <a className="fa fa-google" href={`https://plus.google.com/share?url=http://www.syncano.com/blog${item.path}`} target="_blank"></a>
        <a className="fa fa-pinterest" href={`http://pinterest.com/pin/create/button/?url=http://www.syncano.com/blog${item.path}&description=${title}&media=http://www.syncano.com${image}`} target="_blank"></a>
      </div>
    )
  }
});