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
      start: 'top top',
      endTrigger: '.cards-container',
      end: 'bottom bottom',
      markers: false,
    },
  })

  gsap.to('.who-hero-image-wrapper', {
    scrollTrigger: {
      pin: true,
      pinSpacing: true,
      anticipatepin: true,
      trigger: '.who-hero-image-wrapper',
      start: 'bottom bottom',
      endTrigger: '.who-type-wrapper',
      end: 'bottom bottom',
      markers: false,
    },
  })
}

export default pin
