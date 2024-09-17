import { gsap } from 'gsap'

function blog() {
  const blog_nav_items = document.querySelectorAll('.blog-nav-item')

  function isMobile() {
    return window.innerWidth <= 767
  }

  function img_hover_in(event) {
    if (!isMobile()) {
      const item = event.currentTarget
      let img = item.querySelector('.blog-nav-img')
      gsap.to(img, {
        scale: 1.05,
        duration: 1,
        ease: 'power3.out',
      })
    }
  }

  function img_hover_out(event) {
    if (!isMobile()) {
      const item = event.currentTarget
      let img = item.querySelector('.blog-nav-img')
      gsap.to(img, {
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      })
    }
  }

  blog_nav_items.forEach((item) => {
    item.addEventListener('mouseenter', img_hover_in)
    item.addEventListener('mouseleave', img_hover_out)
  })
}

export default blog
