import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function pin() {
  const map = document.querySelector('.map-container')
  gsap.to(map, {
    scrollTrigger: {
      pin: true,
      // pinSpacing: false,
      // anticipatepin: true,
      trigger: '.map-container',
      start: 'top top',
      endTrigger: '.cards-container',
      end: 'bottom bottom',
      markers: false,
    },
  })
}

export default pin
