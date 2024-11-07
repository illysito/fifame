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

  const cif_hero = document.querySelector('.cif-hero-wrapper')
  const cif_hero_heading = document.querySelector('.cif-hero-heading')
  const cif_page = document.querySelector('.cif-page-section')

  function isPC() {
    return window.innerWidth > 991
  }

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

  if (cif_hero) {
    gsap.to(cif_hero, {
      y: 100,
      scrollTrigger: {
        trigger: cif_page,
        start: 'top bottom',
        scrub: 1,
      },
    })

    gsap.to(cif_hero_heading, {
      y: 300,
      scrollTrigger: {
        trigger: cif_page,
        start: 'top bottom',
        scrub: 1,
      },
    })
  } else {
    console.log(' ')
  }

  if (colabora_hero) {
    if (isPC()) {
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
      gsap.to(colabora_hero, {
        y: 200,
        scrollTrigger: {
          trigger: colabora_page,
          start: 'top 75%',
          scrub: 1,
          markers: false,
        },
      })

      gsap.to(colabora_hero_heading, {
        y: 200,
        scrollTrigger: {
          trigger: colabora_page,
          start: 'top 75%',
          scrub: 1,
        },
      })
    }
  } else {
    console.log(' ')
  }
}

export default parallax
