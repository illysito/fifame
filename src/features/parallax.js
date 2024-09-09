import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function parallax() {
  const project_hero = document.querySelector('.projects-hero-wrapper')
  const project_hero_heading = document.querySelector('.projects-hero-heading')
  const project_page = document.querySelector('.projects-page-section')

  const colabora_hero = document.querySelector('.colabora-hero-wrapper')
  const colabora_hero_heading = document.querySelector('.colabora-hero-heading')
  const colabora_page = document.querySelector('.colabora-desarrollo-section')

  if (project_hero) {
    gsap.to(project_hero, {
      y: 200,
      scrollTrigger: {
        trigger: project_page,
        start: 'top bottom',
        scrub: 1,
      },
    })

    gsap.to(project_hero_heading, {
      y: 600,
      scrollTrigger: {
        trigger: project_page,
        start: 'top bottom',
        scrub: 1,
      },
    })
  } else {
    console.log(' ')
  }

  if (colabora_hero) {
    gsap.to(colabora_hero, {
      y: 200,
      scrollTrigger: {
        trigger: colabora_page,
        start: 'top bottom',
        scrub: 1,
      },
    })

    gsap.to(colabora_hero_heading, {
      y: 200,
      scrollTrigger: {
        trigger: colabora_page,
        start: 'top bottom',
        scrub: 1,
      },
    })
  } else {
    console.log(' ')
  }
}

export default parallax
