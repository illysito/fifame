import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'

// import parallax from './features/hero'
import card_hover from './features/landing/cards'
import landing_parallax from './features/landing/landing_parallax'
import reveal from './features/objetivos'
import pin from './features/pin'
import preloader from './features/preloader'

console.log('Its working from GitHub!')

gsap.registerPlugin(ScrollTrigger)

//------------ QUERYS --------------//

const cards = document.querySelectorAll('.card')
const body = document.body

//------------ FUNCTIONS ------------//

function init() {
  // Check if the preloader has been shown before
  const preloaderShown = localStorage.getItem('preloaderShown')
  console.log(preloaderShown)
  if (!preloaderShown) {
    // Show the preloader if it hasn't been shown before
    document.querySelector('.preloader-section').style.display = 'flex'
    preloader()
  } else {
    // Hide the preloader if it has been shown before
    document.querySelector('.preloader-section').style.display = 'none'
  }
}

function runHomePageFunctions() {
  landing_parallax(cards)
  card_hover(cards)
}

//---------- MAIN -------------//
init()
reveal()
// parallax()
if (body.classList.contains('body-home')) {
  console.log('HOME')
  runHomePageFunctions()
}
pin()
