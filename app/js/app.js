const navigation = document.querySelector('.c-header__navigation')
const header = document.querySelector('.c-header')
const dropdowns = document.querySelectorAll('[data-dropdown]')
const dropdownsContent = document.querySelectorAll('[data-dropdown-content]')
const container = document.querySelector('.c-header__dropdown-list')
const bg = document.querySelector('.c-header__navigation-bg')
const burger = document.querySelector('.c-hamburger-js')
const range = document.querySelector('.range--js')
const slider = document.querySelector('.slider--js')

const SECONDS_PRICE = 5;
const SECONDS_MAX = 20000000;
const SECONDS_MIN = 270000;

if (slider) {
  slider.oninput = ({
    target
  }) => {
    const value = parseInt(target.value, 10);
    range.style.setProperty("width", (value - SECONDS_MIN) / (SECONDS_MAX - SECONDS_MIN) * 100 + "%");
  }
}

const offset = (element) => {
  const rect = element.getBoundingClientRect()
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

const target = document.querySelectorAll(`[data-dropdown-content]`)[0]
const item = dropdowns[0]
const targetWidth = target.offsetWidth
const targetHeight = target.offsetHeight
const left = offset(item).left + (item.offsetWidth / 2) - (targetWidth / 2)
Object.assign(bg.style, {
  width: targetWidth + 'px',
  height: targetHeight + 'px',
  'transform': `translateX(${left}px)`
})
Object.assign(container.style, {
  width: targetWidth + 'px',
  height: targetHeight + 'px',
  'transform': `translateX(${left}px)`
})

dropdowns.forEach((item) => {
  const dropdownTarget = item.getAttribute('data-dropdown')

  if (dropdownTarget !== 'clear')
    item.querySelector('.c-header__navigation-mobile').innerHTML = document.querySelector(`[data-dropdown-content=${item.getAttribute('data-dropdown')}]`).innerHTML


  item.addEventListener('mouseenter', (event) => {

    const windowMode = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ')[0]

    if (windowMode === 'desktop') {

      const target = document.querySelector(`[data-dropdown-content=${item.getAttribute('data-dropdown')}]`)

      try {
        document.querySelector('[data-dropdown-content].--active').classList.remove('--active')
      } catch (e) {}

      navigation.classList.add('--dropdown')
      if (target) {
        target.classList.add('--active')
        const targetWidth = target.offsetWidth
        const targetHeight = target.offsetHeight
        const left = offset(item).left + (item.offsetWidth / 2) - (targetWidth / 2)
        Object.assign(bg.style, {
          width: targetWidth + 'px',
          height: targetHeight + 'px',
          'transform': `translate(${left}px, 0)`
        })
        Object.assign(container.style, {
          width: targetWidth + 'px',
          height: targetHeight + 'px',
          'transform': `translate(${left}px, 0)`
        })
      } else {
        navigation.classList.remove('--dropdown')
      }
    }

  })

})

navigation.addEventListener('mouseleave', (event) => {
  try {
    navigation.classList.remove('--dropdown')
    document.querySelector('[data-dropdown-content].--active').classList.remove('--active')
  } catch (e) {}
})

try {
burger.addEventListener("click", () => {
  burger.classList.toggle("--active");
  document.querySelector('body').classList.toggle("--mobile-active");
})
} catch(e) {}

(function () {
  const select = document.querySelector('[data-feature-select]')
  if (select) {

  const features = document.querySelectorAll('[data-feature-list-item]')
  const demos = {
    hosting: (config) => hostingDemo(config).end(),
    database: (config) => databaseDemo(config).end(),
    users: (config) => usersDemo(config).end(),
    sockets: (config) => eventsDemo(config).end(),
  }
  try {
  createDemo(demos.hosting)
  } catch (e) {

  }
  select.addEventListener('change', handleChange)
  features.forEach(item => item.addEventListener('click', () => handleFeatureClick(item)))

  function createDemo(callback) {
    const terminal = document.querySelector('[data-terminal]')
    const demo = new GDemo('[data-terminal]')
    terminal.innerHTML = ''
    setupDemo(demo)
    callback(demo)
  }

  function handleChange(event) {
    const value = event.currentTarget.value
    const selectedFeatureListItem = document.querySelector(`[data-feature-list-item="${value}"]`)

    Array.from(features).forEach(item => {
      item.classList.remove('is-active')
    })

    try {
      createDemo(demos[value])
    } catch (err) {}

    selectedFeatureListItem.classList.add('is-active')
  }
  function handleFeatureClick(target) {
    const value = target.dataset['featureListItem']

    Array.from(target.parentElement.children).forEach(item => {
      item.classList.remove('is-active')
    })

    select.value = value
    target.classList.add('is-active')

    try {
      createDemo(demos[value])
    } catch (err) {}
  }

  const scrollToFeatures = () => {
    document.querySelector(".features--js").scrollIntoView({
      block: "end",
      behavior: "smooth"
    })
  }

  const locationHref = window.location.hash

  document.onreadystatechange = function() {
    if(['#hosting', '#sockets', '#database', '#users'].indexOf(locationHref) > -1) {
      const dataFeature = document.querySelector(`[data-feature-list-item=${locationHref.slice(1)}]`)
      handleFeatureClick(dataFeature)
      scrollToFeatures()
    }
  }

  const dropdownLink = document.querySelectorAll('[data-feature-link]')

  const showFeatures = (featureLinkName) => {
    scrollToFeatures()
    document.querySelector('body').classList.remove("--mobile-active");
    burger.classList.remove("--active");
    const dataFeature = document.querySelector(`[data-feature-list-item=${featureLinkName}]`)
    handleFeatureClick(dataFeature)
  }

  dropdownLink.forEach((link) => {
    link.classList.remove('is-active')
    link.addEventListener("click", (e) => {
      showFeatures(e.currentTarget.dataset.featureLink)
    })
  })
  }
})()

console.log(`%c
.                               .
.    Curious person, huh?       .
.    Want to hear something?    .
.    type: play() below         .
.                               .
`, 'background: #000; color: #fefefe; font-size: 14px; line-height:18px; margin:0; font-family: Menlo, monospace;');


const play = () => {
  const audio = document.createElement('audio')
  audio.src = '/assets/toto.mp3'
  audio.play()
}
