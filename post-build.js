import _ from 'lodash';
import sm from 'sitemap';
import fs from 'fs-extra';

const generateSitemapUrl = (page) => {
  const pagePath = _.isString(page) ? page : page.path;
  const nonIndexedPages = ['/404/', '/lp/'];
  const importantPages = ['/', '/pricing/'];
  const isRootPath = pagePath === '/';
  const isNonIndexedPage = _.includes(nonIndexedPages, pagePath) || _.some(nonIndexedPages, (nonIndexedPage) => _.startsWith(pagePath, nonIndexedPage));
  const isImportantPage = _.includes(importantPages, pagePath);

  if (!pagePath || isNonIndexedPage) {
    return;
  }

  return {
    url: pagePath,
    changefreq: isImportantPage ? 'daily' : 'monthly',
    priority: isRootPath ? 1 : 0.85
  }
};

const generateSitemap = (pages) => {
  const staticDirNames = ['/slack-invite/'];
  const sitemapUrls = _([...pages, ...staticDirNames]).map(generateSitemapUrl).filter().value();

  const sitemap = sm.createSitemap({
    hostname: 'https://www.syncano.io',
    cacheTime: 600000,
    urls: sitemapUrls
  });

  return fs.writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap.toString());
};

const generateRobots = () => {
  const fileContent = 'User-agent: *\n' +
    'Allow: /\n\n' +
    'Sitemap: https://www.syncano.io/sitemap.xml\n' +
    'Sitemap: https://www.syncano.io/blog/sitemap.xml';

  return fs.writeFileSync(`${__dirname}/public/robots.txt`, fileContent);
};

const copyStaticContent = () => {
  try {
    fs.copySync(`${__dirname}/static`, `${__dirname}/public`);
  } catch (err) {
    console.error(err);
  }
};

export default (pages, callback) => {
  generateSitemap(pages);
  generateRobots();
  copyStaticContent();
  return callback();
};
