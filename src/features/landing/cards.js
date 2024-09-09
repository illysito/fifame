import { gsap } from 'gsap'

function card_hover(cards) {
  const map_black = document.querySelector('.map-black')
  const map_brown = document.querySelector('.map-brown')

  function hover_card_in(event) {
    const card = event.currentTarget
    const image = card.querySelector('.card-img')
    const heading = card.querySelector('.card-heading')
    const tl = gsap.timeline()

    tl.to(
      image,
      {
        scale: 1.05,
        duration: 1,
        ease: 'power3.out',
      },
      0
    )
      .to(
        heading,
        {
          x: 5,
          ease: 'power1.inOut',
        },
        0
      )
      .to(
        map_black,
        {
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0
      )
      .to(
        map_brown,
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        0
      )
  }

  function hover_card_out(event) {
    const card = event.currentTarget
    const image = card.querySelector('.card-img')
    const heading = card.querySelector('.card-heading')
    const tl = gsap.timeline()

    tl.to(
      image,
      {
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      },
      0
    )
      .to(
        heading,
        {
          x: 0,
          ease: 'power1.inOut',
        },
        0
      )
      .to(
        map_black,
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        0
      )
      .to(
        map_brown,
        {
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0
      )
  }

  cards.forEach((card) => {
    card.addEventListener('mouseenter', hover_card_in)
    card.addEventListener('mouseleave', hover_card_out)
  })
}

export default card_hover
