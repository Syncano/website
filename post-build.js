import _ from 'lodash';
import sm from 'sitemap';
import fs from 'fs';

let generateSitemapUrl = (page) => {
  let pagePath = page.path;

  if (!pagePath) {
    return;
  }

  return {
    url: pagePath,
    changefreq: 'daily',
    priority: pagePath === '/' ? 1 : 0.85
  }
};

let generateSitemap = (pages) => {
  let sitemapUrls = _(pages).map(generateSitemapUrl).filter().value();

  let sitemap = sm.createSitemap({
    hostname: 'https://www.syncano.io',
    cacheTime: 600000,
    urls: sitemapUrls
  });

  return fs.writeFileSync("" + __dirname + "/sitemap.xml", sitemap.toString());
};

export default (pages, callback) => {
  generateSitemap(pages);
  return callback();
};