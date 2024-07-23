import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function pin() {
  gsap.to('.pinned-img-1', {
    scrollTrigger: {
      pin: true,
      pinSpacing: false,
      trigger: '.pinned-img-1',
      start: 'top 10%',
      endTrigger: '.cards-container',
      end: 'bottom 90%',
    },
  })
}

export default pin
