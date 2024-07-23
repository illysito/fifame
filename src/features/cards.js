import { gsap } from 'gsap'

function card_hover() {
  const cards = document.querySelectorAll('.card')
  const card_green = document.querySelector('.card-green')
  const card_red = document.querySelector('.card-red')
  const card_yellow = document.querySelector('.card-yellow')
  const card_blue = document.querySelector('.card-blue')

  function hover_card_in(event) {
    const card = event.currentTarget
    const image = card.querySelector('.card-img')
    const heading = card.querySelector('.card-heading')

    gsap.to(image, {
      scale: 1.05,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to(heading, {
      x: 5,
      ease: 'power1.inOut',
    })
  }

  function hover_card_out(event) {
    const card = event.currentTarget
    const image = card.querySelector('.card-img')
    const heading = card.querySelector('.card-heading')

    gsap.to(image, {
      scale: 1,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to(heading, {
      x: 0,
      ease: 'power1.inOut',
    })
  }

  function green_card_in(event) {
    const card = event.currentTarget
    console.log('green:', card)
    gsap.to('.map-black', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-green', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function green_card_out(event) {
    const card = event.currentTarget
    console.log('green:', card)
    gsap.to('.map-black', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-green', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function red_card_in(event) {
    const card = event.currentTarget
    console.log('red:', card)
    gsap.to('.map-black', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-red', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function red_card_out(event) {
    const card = event.currentTarget
    console.log('red:', card)
    gsap.to('.map-black', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-red', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function yellow_card_in(event) {
    const card = event.currentTarget
    console.log('yellow:', card)
    gsap.to('.map-black', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-yellow', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function yellow_card_out(event) {
    const card = event.currentTarget
    console.log('yellow:', card)
    gsap.to('.map-black', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-yellow', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function blue_card_in(event) {
    const card = event.currentTarget
    console.log('blue:', card)
    gsap.to('.map-black', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-blue', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
  }

  function blue_card_out(event) {
    const card = event.currentTarget
    console.log('blue:', card)
    gsap.to('.map-black', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to('.map-blue', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }

  cards.forEach((card) => {
    card.addEventListener('mouseenter', hover_card_in)
    card.addEventListener('mouseleave', hover_card_out)
  })

  card_green.addEventListener('mouseenter', green_card_in)
  card_green.addEventListener('mouseleave', green_card_out)
  //
  card_red.addEventListener('mouseenter', red_card_in)
  card_red.addEventListener('mouseleave', red_card_out)
  //
  card_yellow.addEventListener('mouseenter', yellow_card_in)
  card_yellow.addEventListener('mouseleave', yellow_card_out)
  //
  card_blue.addEventListener('mouseenter', blue_card_in)
  card_blue.addEventListener('mouseleave', blue_card_out)
}

export default card_hover
