import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'

import blog from './features/blog'
import card_hover from './features/landing/cards'
import landing_parallax from './features/landing/landing_parallax'
import nav from './features/nav'
import reveal from './features/objetivos'
import parallax from './features/parallax'
import pin from './features/pin'
import preloader from './features/preloader'

console.log('Its working from GitHub!')

gsap.registerPlugin(ScrollTrigger)

//------------ QUERYS --------------//

const body = document.body
const nav_dropdown = document.querySelector('.nav-dropdown')
const clicker = document.querySelector('.dropdown-click')
const cards = document.querySelectorAll('.card')

//------------ FUNCTIONS ------------//

function isPC() {
  return window.innerWidth > 991
}

function init() {
  // Check if the preloader has been shown before
  const preloaderShown = localStorage.getItem('preloaderShown')
  console.log('preloader was shown: ' + preloaderShown)
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
  if (isPC()) {
    landing_parallax(cards)
    card_hover(cards)
    pin()
  } else {
    console.log('No scripts are running in mobile version of landing page')
  }
}

//---------- MAIN -------------//
init()
nav(nav_dropdown, clicker)
reveal()
parallax()
blog()
if (body.classList.contains('body-home')) {
  console.log('HOME')
  runHomePageFunctions()
}
