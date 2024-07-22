import { gsap } from 'gsap'

function preloader() {
  gsap.to('.preloader-section', {
    opacity: 0,
    delay: 3,
    duration: 0.3,
    ease: 'power4.inOut',
    onComplete: () => {
      localStorage.setItem('preloaderShown', 'true')
      document.querySelector('.preloader-section').style.zIndex = 0
      document.querySelector('.preloader-section').style.display = 'none'
    },
  })
  gsap.to('.logo-img-hands', {
    scale: 1.2,
    duration: 3,
  })
}

export default preloader
