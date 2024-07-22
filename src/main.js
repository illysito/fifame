import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'

import parallax from './features/hero'
import preloader from './features/preloader'

console.log('Its working from GitHub!')

gsap.registerPlugin(ScrollTrigger)

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
init()
parallax()
