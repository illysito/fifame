import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function pin() {
  gsap.to('.map-container', {
    scrollTrigger: {
      pin: true,
      pinSpacing: false,
      anticipatepin: true,
      trigger: '.map-container',
      start: 'top 1%',
      endTrigger: '.cards-container',
      end: 'bottom 99%',
    },
  })
}

export default pin
