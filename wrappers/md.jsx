import React from 'react';
import Helmet from 'react-helmet';
import Team from '../pages/about/_TeamConstans';
import { Link } from 'react-router';
import Radium from 'radium';

import WhiteShare from '../images/white-share.png';

export default Radium(React.createClass({

  getStyles() {
    let post = this.props.page.data;

    return {
      header: {
        backgroundImage: `url('${post.image}')`
      }
    }
  },

  renderCategoriesLinks(categories) {
    return _.map(categories, this.renderCategoryLink);
  },

  renderCategoryLink(category) {
    let categoryName = _.kebabCase(category);
    let categoryUrl = `/category/${categoryName}/`;

    return (
      <Link to={categoryUrl}>{category} </Link>
    )
  },

  render() {
    let post = this.props.page.data;
    let author = Team[post.author];

    if (!post.categories) {
      return (
        <div>
          <Helmet title={post.title}/>
          <div dangerouslySetInnerHTML={{__html: post.body}}></div>
        </div>
      )
    }

    return (
      <div style={{marginBottom: 70}}>
        <Helmet title={post.title}/>
        <div className="post-header image">
          <div className="next pull-right hidden "><a href=""><img src={require('../images/next-arrow.png')}/></a></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="post-meta">
                  <span className="date">
                  </span>
                  <span className="categories">
                    {this.renderCategoriesLinks(post.categories)}
                  </span>
                </div>
                <h1>{post.title}</h1>
                <div className="author">
                  <div className="pull-left">
                    <img src={`/about/${author.photo}`} alt={author.name} height="60" width="auto" />
                  </div>
                  <h5>By {author.name}</h5>
                  <h5><a href={`http://twitter.com/${author.twitter}`} target="_blank">@{author.twitter}</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="share">
          <div className="container">
            <div className="pull-right">
              <span className="icon" style={{backgroundImage: `url(${WhiteShare})`}}> </span>
              <div className="links social-share">
                <div className="arrow-up"></div>
                <a className="fa fa-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=http://www.syncano.com${post.path}`} target="_blank"> </a>
                <a className="fa fa-twitter" href={`https://twitter.com/intent/tweet?text=${post.title}&url=http://www.syncano.com${post.path}`} target="_blank"> </a>
                <a className="fa fa-google" href={`https://plus.google.com/share?url=http://www.syncano.com${post.path}`} target="_blank"> </a>
                <a className="fa fa-pinterest" href={`http://pinterest.com/pin/create/button/?url=http://www.syncano.com${post.path}&description=${post.title}&media=${post.image}`} target="_blank"> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <article className="post-content">
            <div className="row">
              <div className="col-md-8 col-md-offset-2" dangerouslySetInnerHTML={{__html: post.body}}></div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}));
