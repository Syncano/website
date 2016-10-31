const utils = {
  getElementHeight(id) {
    const element = document.getElementById(id);
    const height = element ? element.clientHeight : 0;

    return height;
  }
};

export default utils;
