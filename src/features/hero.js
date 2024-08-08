import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function parallax() {
  gsap.to('.hero-wrapper', {
    y: 200,
    scrollTrigger: {
      trigger: '.main-project-section',
      start: 'top bottom',
      scrub: 1,
    },
  })

  gsap.to('.main-project-section', {
    y: 200,
    scrollTrigger: {
      trigger: '.projects-section',
      start: 'top bottom',
      scrub: 1,
    },
  })

  gsap.to('.colabora-hero-wrapper', {
    y: 200,
    scrollTrigger: {
      trigger: '.colabora-desarrollo-section',
      start: 'top bottom',
      scrub: 1,
    },
  })

  gsap.to('.colabora-hero-heading', {
    y: 200,
    scrollTrigger: {
      trigger: '.colabora-desarrollo-section',
      start: 'top bottom',
      scrub: 1,
    },
  })

  const cards = document.querySelectorAll('.card')

  cards.forEach((card) => {
    gsap.to(card, {
      y: 20,
      scrollTrigger: {
        trigger: card,
        start: 'bottom 40%',
        scrub: 1.5,
      },
    })
  })
}

export default parallax
