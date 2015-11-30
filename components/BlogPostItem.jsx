import React from 'react';
import Team from '../pages/about/_TeamConstans';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';
import moment from 'moment';
import SocialLinks from './SocialLinks';

export default React.createClass({

  renderDate(date) {
    if (date) {
      let itemDate = moment(date).format('DD. MMMM YYYY');

      return (
        <span className="date">{itemDate}</span>
      );
    }
  },

  renderCategoryLink(category) {
    let categoryName = _.kebabCase(category);
    let categoryUrl = `/blog/category/${categoryName}/`;

    return (
      <Link to={categoryUrl}>{category}</Link>
    )
  },

  renderSeparator() {
    return <span className="sep">, </span>;
  },

  renderCategories(categories) {
    let categoriesLinks = _.map(categories, this.renderCategoryLink);
    let separatedCategoriesLinks = [];

    _.map(categoriesLinks, (link, index) => {
      separatedCategoriesLinks.push(link);
      separatedCategoriesLinks.push(this.renderSeparator());
    });

    return (
      <span className="categories">
        {separatedCategoriesLinks}
      </span>
    )
  },

  renderHeader(item) {
    let dataIsObject = _.isObject(item.data);
    let title = dataIsObject ? item.data.title : item.path;

    return (
      <header>
        <h2 className="title"><Link to={item.path}>{title}</Link></h2>
        <div className="meta">
          {this.renderDate(item.data.date)}
          {/*{this.renderCategories(item.data.categories)}*/}
        </div>
      </header>
    )
  },

  render() {
    let item = this.props.item;
    let dataIsObject = _.isObject(item.data);
    let isDraft = dataIsObject ? item.data.draft : false;
    let title = dataIsObject ? item.data.title : item.path;
    let heroImage = dataIsObject && item.data.image ? item.data.image : '/blog/default-blogpost-hero.png';
    let heroImageURL = dataIsObject && item.data.image ? `${item.data.path}${heroImage}` : heroImage;
    let author = Team[item.data.author];

    if (item.path !== link("/") && dataIsObject && !isDraft) {
      return (
        <div
          className="row"
          key={item.path}>
          <div className="post-content">
            <Link to={item.path} className="permalink">
              <span className="author"><img src={`/about/${author.photo}`} alt={author.name}/></span>
              <img src={heroImageURL} alt={title}/>
            </Link>
            {this.renderHeader(item)}
            <div className="summary">{item.data.summary}</div>
            <footer>
              <div>
                <div className="pull-left"><Link to={item.path}>MORE</Link></div>
                <div className="pull-right">
                  <div className="share-links">
                    <span><img src={require('../images/share.png')} alt="share" style={{height: 20, width: 20, border: 'none'}}/></span>
                    <SocialLinks item={item} title={title} image={heroImageURL}/>
                  </div>
                </div>
                <div style={{clear: 'both'}}></div>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  }
});