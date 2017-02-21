const utils = {
  getElementHeight(id) {
    const element = document.getElementById(id);
    const height = element ? element.clientHeight : 0;

    return height;
  },
  setupScroll(hash, topBarHeight) {
    const elementToScrollTo = this._getScrollToElement(hash);

    if (elementToScrollTo) {
      return this._scrollToElement(elementToScrollTo, -topBarHeight);
    }

    return this._scrollTop();
  },
  _getScrollToElement(hash) {
    const name = hash.replace('#', '');

    return document.getElementsByName(name)[0];
  },
  _scrollToElement(element, offset) {
    setTimeout(() => {
      element.scrollIntoView();
      // scroll up as TopBar hides content
      window.scrollBy(0, offset);
    }, 0);
  },
  _scrollTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
};

export default utils;
