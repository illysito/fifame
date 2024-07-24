import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function reveal() {
  gsap.to('.colabora-heading-2', {
    y: 0,
    duration: 1,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.colabora-heading-2',
      start: 'top 95%',
    },
  })

  gsap.to('.colabora-heading-1', {
    y: 0,
    duration: 1,
    ease: 'power1.inOut',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.colabora-heading-1',
      start: 'top 95%',
    },
  })

  gsap.to('.colabora-heading', {
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.colabora-heading',
      start: 'top 95%', // Ajusta esto según sea necesario
      end: 'top 20%', // Asegúrate de que haya un rango claro
    },
  })
}

export default reveal
