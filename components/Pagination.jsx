import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

  getDefaultProps() {
    currentPage: 1
  },

  renderPrevButton() {
    let currentPage = this.props.currentPage;
    let prevPage = currentPage - 1;
    let classNames = 'previous col-md-4 col-xs-4';
    let buttonText = 'Prev Page';

    if (currentPage > 1) {
      return (
        <Link to='blog-page' params={{pageId: prevPage}} className={classNames}>{buttonText}</Link>
      )
    }

    return (
      <span className={classNames}>{buttonText}</span>
    )
  },

  renderNextButton(pagesCount) {
    let currentPage = this.props.currentPage;
    let nextPage = _.add(currentPage, 1);
    let classNames = 'next col-md-4 col-xs-4';
    let buttonText = 'Next Page';

    if (currentPage == pagesCount) {
      return (
        <span className={classNames}>{buttonText}</span>
      )
    }

    return (
      <Link to='blog-page' params={{pageId: nextPage}} className={classNames}>{buttonText}</Link>
    )
  },

  render() {
    let postsCount = this.props.postsCount;
    let postsPerPage = this.props.postsPerPage;
    let pagesCount = _.ceil(postsCount / postsPerPage);
    let currentPage = this.props.currentPage;

    if (pagesCount <= 1) {
      return null;
    }

    return (
      <div className="pagination clearfix">
        {this.renderPrevButton()}
        <span className="page_number col-md-4 col-xs-4">Page <strong>{{currentPage}}</strong> of <strong>{pagesCount}</strong></span>
        {this.renderNextButton(pagesCount)}
      </div>
    )
  }
});