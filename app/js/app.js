function offset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

function morphDropdown(element) {
  this.element = element;
  this.mainNavigation = this.element.querySelector('.c-header__navigation');
  this.mainNavigationItems = this.mainNavigation.querySelectorAll('.has-dropdown');
  this.dropdownList = this.element.querySelector('.c-header__navigation-dropdown-list');
  this.dropdownWrappers = this.dropdownList.querySelector('.c-header__navigation-dropdown');
  this.dropdownItems = this.dropdownList.querySelectorAll('.content');
  this.dropdownBg = this.dropdownList.querySelector('.c-header__navigation-bg');
  this.mq = this.checkMq();
  this.bindEvents();
}

morphDropdown.prototype.checkMq = function () {
  //check screen size
  var self = this;
  //get(0)
  console.log(self.element)
  return window.getComputedStyle(self.element, '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
};

morphDropdown.prototype.bindEvents = function () {
  var self = this;
  //hover over an item in the main navigation
  this.mainNavigationItems.forEach((item) => {
    item.addEventListener('mouseenter', (event) => {
      //hover over one of the nav items -> show dropdown
      self.showDropdown(item);
    })
    item.addEventListener('mouseleave', (event) => {
      setTimeout(function () {
        //if not hovering over a nav item or a dropdown -> hide dropdown
        if (!self.mainNavigation.querySelector('.has-dropdown:hover') && !self.element.querySelector('.dropdown-list:hover')) self.hideDropdown();
      }, 50);
    })
    item.addEventListener('touchstart', (event) => {
      var selectedDropdown = self.dropdownList.querySelector('#' + event.target.getAttribute('data-content'));
      if (!self.element.hasClass('is-dropdown-visible') || !selectedDropdown.hasClass('active')) {
        event.preventDefault();
        self.showDropdown(item);
      }
    })
  })

  //hover over the dropdown
  this.dropdownList.addEventListener('mouseleave', () => {
    setTimeout(function () {
      //if not hovering over a dropdown or a nav item -> hide dropdown
      (self.mainNavigation.querySelector('.has-dropdown:hover').length == 0 && self.element.querySelector('.dropdown-list:hover').length == 0) && self.hideDropdown();
    }, 50);
  })


  //on small screens, open navigation clicking on the menu icon
  document.querySelector('.nav-trigger').addEventListener('click', function (event) {
    event.preventDefault();
    self.element.toggleClass('nav-open');
  });
};

morphDropdown.prototype.showDropdown = function (item) {
  this.mq = this.checkMq();
  if (this.mq == 'desktop') {
    var self = this;
    console.log(item.getAttribute('data-content'))
    var selectedDropdown = this.dropdownList.querySelector('#' + item.getAttribute('data-content')),
      selectedDropdownHeight = selectedDropdown.offsetHeight;
    var selectedDropdownWidth = selectedDropdown.querySelector('.content').offsetWidth,
      selectedDropdownLeft = offset(item).left + item.offsetWidth / 2 - selectedDropdownWidth / 2;
    console.log(selectedDropdown)
    //update dropdown position and size
    this.updateDropdown(selectedDropdown, parseInt(selectedDropdownHeight), selectedDropdownWidth, parseInt(selectedDropdownLeft));
    //add active class to the proper dropdown item
    try { this.element.querySelector('.--active').classList.remove('--active'); }
    catch(e) {console.log(e)}
    selectedDropdown.classList.add('--active')
    //removeClass('move-left move-right').prevAll().addClass('move-left').end().nextAll().addClass('move-right');
    item.classList.contains('--active');
    //show the dropdown wrapper if not visible yet
    if (!this.element.classList.contains('--dropdown-visible')) {
      console.log('aaa')
      setTimeout(function () {
        self.element.classList.add('--dropdown-visible');
      }, 10);
    }
  }
};

morphDropdown.prototype.updateDropdown = function (dropdownItem, height, width, left) {
  console.log(this.dropdownList)
  Object.assign(this.dropdownList.style, {
    '-moz-transform': 'translateX(' + left + 'px)',
    '-webkit-transform': 'translateX(' + left + 'px)',
    '-ms-transform': 'translateX(' + left + 'px)',
    '-o-transform': 'translateX(' + left + 'px)',
    'transform': 'translateX(' + left + 'px)',
    'width': width + 'px',
    'height': height + 'px'
  });

  Object.assign(this.dropdownBg.style, {
    '-moz-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
    '-webkit-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
    '-ms-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
    '-o-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
    'transform': 'scaleX(' + width + ') scaleY(' + height + ')'
  });
};

morphDropdown.prototype.hideDropdown = function () {
  this.mq = this.checkMq();
  if (this.mq == 'desktop') {
    this.element.removeClass('--dropdown-visible').querySelector('.--active').removeClass('--active').end().querySelector('.move-left').removeClass('move-left').end().querySelector('.move-right').removeClass('move-right');
  }
};

morphDropdown.prototype.resetDropdown = function () {
  this.mq = this.checkMq();
  if (this.mq == 'mobile') {
    this.dropdownList.removeAttr('style');
  }
};

var morphDropdowns = [];
if (document.querySelectorAll('.c-header').length > 0) {
  document.querySelectorAll('.c-header').forEach(function (item) {
    //create a morphDropdown object for each .cd-morph-dropdown
    morphDropdowns.push(new morphDropdown(item));
  });

  var resizing = false;

  //on resize, reset dropdown style property
  updateDropdownPosition();
  window.addEventListener('resize', (event) => {
    if (!resizing) {
      resizing = true;
      (!window.requestAnimationFrame) ? setTimeout(updateDropdownPosition, 300): window.requestAnimationFrame(updateDropdownPosition);
    }
  }, true);


  function updateDropdownPosition() {
    morphDropdowns.forEach(function (element) {
      element.resetDropdown();
    });

    resizing = false;
  };
}


const demo = new GDemo('#terminal')
setupDemo(demo)

hostingSync(demo).end()
// databaseClasses(demo).end()
// databaseSocketCreate(demo).end()
