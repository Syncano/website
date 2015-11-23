import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import LatestBlogPosts from './LatestBlogPosts';
import Newsletter from './Newsletter';

export default React.createClass({

  getAllPosts() {
    let posts = _.filter(this.props.pages, (page) => page.data && _.startsWith(page.requirePath, 'blog/') && !_.startsWith(page.requirePath, 'blog/category/')).reverse();

    return posts;
  },

  render() {
    return (
      <div>
        <footer className="columns" style={{marginTop: 0, paddingBottom: 50}}>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-xs-12 logo">
                <img src={require('../images/syncano-oval.png')} alt="syncano logo small" width="84"/>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about/">About Us</Link></li>
                  <li><Link to="/jobs/">Superstar Jobs</Link></li>
                  <li><Link to="/contact/">Contact Us</Link></li>
                  <li><Link to="/terms-of-service/">Terms and Legal</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 resources">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="blog-template">Blog</Link></li>
                  <li><a href="http://docs.syncano.io/" target="_blank">Docs</a></li>
                  <li><Link to="/pricing/">Pricing</Link></li>
                  <li><Link to="/solutions/">Solutions</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 no-header resources">
                <ul>
                  <li><Link to="/support/">Support</Link></li>
                  <li><Link to="/blog/category/tutorials/">Tutorials</Link></li>
                  <li><a href="http://docs.syncano.io/docs/syncano-libraries/" target="_blank">Libraries</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12">
                <h4>Latest Blog Posts</h4>
                <LatestBlogPosts posts={this.getAllPosts()}/>
                <Newsletter/>
              </div>
            </div>
          </div>
        </footer>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <p className="copyright">&copy; 2015 Syncano. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 col-sm-5 social">
                <a target="_blank" href="https://github.com/Syncano"><i className="fa fa-github-alt"> </i></a>
                <a target="_blank" href="https://plus.google.com/104508582055074736934"><i className="fa fa-google-plus"> </i></a>
                <a target="_blank" href="https://www.facebook.com/syncano"><i className="fa fa-facebook"> </i></a>
                <a target="_blank" href="http://www.linkedin.com/company/syncano"><i className="fa fa-linkedin"> </i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
});
