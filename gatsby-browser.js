import utils from './utils'

exports.onRouteUpdate = function({ action, hash }) {
  const getTopBarHeight = utils.getElementHeight('top-bar');

  if (action !== 'REPLACE') {
    utils.setupScroll(hash, getTopBarHeight);
  }
};
