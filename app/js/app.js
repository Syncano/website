const navigation = document.querySelector('.c-header__navigation')
const dropdowns = document.querySelectorAll('[data-dropdown]')
const dropdownsContent = document.querySelectorAll('[data-dropdown-content]')
const container = document.querySelector('.c-header__navigation-dropdown-list')
const bg = document.querySelector('.c-header__navigation-bg')

const offset = (element) => {
  const rect = element.getBoundingClientRect()
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

dropdowns.forEach((item) => { 
  item.addEventListener('mouseenter', (event) => {
    const target = document.querySelector(`[data-dropdown-content=${item.getAttribute('data-dropdown')}]`)
    try {
      document.querySelector('[data-dropdown-content].--active').classList.remove('--active')
    }
    catch (e) {}
    navigation.classList.add('--dropdown')
    target.classList.add('--active')
    const targetWidth = target.offsetWidth
    const targetHeight = target.offsetHeight
    const left = offset(item).left + (item.offsetWidth / 2) - (targetWidth / 2)
    Object.assign(bg.style, {width: targetWidth+'px', height: targetHeight+'px', 'left':  left + 'px'})
    container.style.left = left+'px';    
  })
})

navigation.addEventListener('mouseleave', (event) => {
  try {
    navigation.classList.remove('--dropdown')
    document.querySelector('[data-dropdown-content].--active').classList.remove('--active')
  }
  catch (e) {}
})




const demo = new GDemo('#terminal')
setupDemo(demo)

hostingSync(demo).end()
// databaseClasses(demo).end()
// databaseSocketCreate(demo).end()
