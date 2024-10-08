import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function landing_parallax(cards) {
  const hero_wrapper = document.querySelector('.hero-wrapper')
  gsap.to(hero_wrapper, {
    y: 200,
    scrollTrigger: {
      trigger: '.main-project-section',
      start: 'top bottom',
      scrub: 1,
    },
  })

  // gsap.to('.main-project-section', {
  //   y: 200,
  //   scrollTrigger: {
  //     trigger: '.projects-section',
  //     start: 'top bottom',
  //     scrub: 1,
  //   },
  // })

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

export default landing_parallax
