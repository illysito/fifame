import { gsap } from 'gsap'

function nav(dropdown, clicker) {
  let isDropped = false
  gsap.set(dropdown, {
    yPercent: -200,
  })
  function dropdown_menu() {
    if (!isDropped) {
      console.log('isDropped: ' + isDropped)
      gsap.to(dropdown, {
        yPercent: 0,
        ease: 'power4.inOut',
        duration: 1,
      })
    } else {
      console.log('isDropped: ' + isDropped)
      gsap.to(dropdown, {
        yPercent: -200,
        ease: 'power4.inOut',
        duration: 1,
      })
    }
    isDropped = !isDropped
  }
  clicker.addEventListener('click', dropdown_menu)
}

export default nav
