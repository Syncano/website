import _ from 'lodash';
import sm from 'sitemap';
import fs from 'fs';

let generateSitemapUrl = (page) => {
  let pagePath = page.path;
  let isRootPath = pagePath === '/';
  let importantPages = ['/', '/pricing/'];
  let isImportantPage = _.includes(importantPages, pagePath);

  if (!pagePath) {
    return;
  }

  return {
    url: pagePath,
    changefreq: isImportantPage ? 'daily' : 'monthly',
    priority: isRootPath ? 1 : 0.85
  }
};

let generateSitemap = (pages) => {
  let sitemapUrls = _(pages).map(generateSitemapUrl).filter().value();

  let sitemap = sm.createSitemap({
    hostname: 'https://www.syncano.io',
    cacheTime: 600000,
    urls: sitemapUrls
  });

  return fs.writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap.toString());
};

export default (pages, callback) => {
  generateSitemap(pages);
  return callback();
};
