import '../styles/portfolio/portfolio.sass'
import { gsap, Power2 } from 'gsap'
import { setLinks, projects, handleSidebar } from './imports'

setLinks()
handleSidebar()

var headline = document.querySelector('.header-title')
var splittedText = headline.innerHTML.toString().split(' ')
headline.innerHTML = ''

splittedText.forEach(text => {
   headline.innerHTML += `<span><h1>${text}</h2></span>`
})

window.addEventListener('load', () => {
   mainCode()
})

function mainCode () {

var mainProjects = document.querySelectorAll('#mainwork button')
var mainProjectsImg = document.querySelectorAll('#mainwork button .img-cont img')

var projectViewImg = document.querySelector('.projectView .main-img')
var projectViewTitle = document.querySelector('.projectView .title')
var projectViewDes = document.querySelector('.projectView .para')
var projectViewDribbble = document.querySelector('.projectView .dribbble')
var projectViewBehance = document.querySelector('.projectView .behance')

var nextProj = document.querySelector('.projectView .next')
var prevProj = document.querySelector('.projectView .prev')

var closeBtn = document.querySelector('.close-btn')

var clicked = false

var currentProj = 0

var projectViewAnim = gsap.timeline({paused: true})
.to('body', 0, { overflowY: 'hidden' })
.to('.projectView', 0, { scale: 1 })
.to('.projectView', 0.3, { pointerEvents: 'all', opacity: 1 })
.from('.projectView .img-cont', 0.8, { width: 0, ease: Power2.easeInOut }, '-= 0.3')
.from('.projectView .img-cont img', 0.8, { scale: 1.6, ease: Power2.easeInOut }, '<')
.from('.projectView .text-cont', 0.4, { opacity: 0, y: '10%', ease: Power2.easeInOut })

mainProjects.forEach((button, i) => {
   button.addEventListener('click',() => {
      viewProject(mainProjectsImg[i].src, i, true)
   })
})

nextProj.addEventListener('click', () => {
   viewProject(mainProjectsImg[currentProj+1].src, currentProj+1, false)
})
prevProj.addEventListener('click', () => {
   viewProject(mainProjectsImg[currentProj-1].src, currentProj-1, false)
})
closeBtn.addEventListener('click', () => {
   gsap.timeline()
   .to('.projectView', 0.4, { scale: 1.6, opacity: 0, pointerEvents: 'none', ease: Power2.easeInOut})
   .to('body', 0, { overflowY: 'scroll' })
})

function viewProject(src, i, animate) {
   projectViewImg.src = src
   projectViewTitle.innerHTML = projects[i].title
   projectViewDes.innerHTML = projects[i].paragraph
   projectViewDribbble.href = projects[i].dribbble
   projectViewBehance.href = projects[i].behance

   currentProj = i

   if(i == 0) {
      prevProj.classList.add('disabled')
   }
   else if(i == (mainProjects.length-1)) {
      nextProj.classList.add('disabled')
   }
   else {
      prevProj.classList.remove('disabled')
      nextProj.classList.remove('disabled')
   }

   if(animate) {
      if(clicked) {
         projectViewAnim.restart()
      } else {
         projectViewAnim.resume()
         clicked = true
      }
   }
}

var otherWorks = document.querySelectorAll('#otherwork button')
var otherWorksImg = document.querySelectorAll('#otherwork .img-cont img')
var otherWorkDribbble = document.querySelectorAll('#otherwork .dribbble')
var otherWorkBehance = document.querySelectorAll('#otherwork .behance')

var otherprojViewImg = document.querySelector('.main-section-img')
var otherprojViewDribbble = document.querySelector('.otherProjectView .dribbble')
var otherprojViewBehance = document.querySelector('.otherProjectView .behance')

var nextOtherProj = document.querySelector('.otherProjectView .next')
var prevOtherProj = document.querySelector('.otherProjectView .prev')

var otherProjCloseBtn = document.querySelector('.otherProject-close-btn')

var otherProjCurrent = 0

otherWorks.forEach((el, i) => {
   el.addEventListener('click', () => {
      viewOtherProject(otherWorksImg[i].src, i, true)
   })
})

nextOtherProj.addEventListener('click', () => {
   viewOtherProject(otherWorksImg[otherProjCurrent+1].src, otherProjCurrent+1, false)
})

prevOtherProj.addEventListener('click', () => {
   viewOtherProject(otherWorksImg[otherProjCurrent-1].src, otherProjCurrent-1, false)
})

otherProjCloseBtn.addEventListener('click', () => {
   gsap.timeline()
   .to('.otherProjectView', 0.4, { scale: 1.5, ease: Power2.easeInOut })
   .to('.otherProjectView', 0.3, { opacity: 0, pointerEvents: 'none', ease: Power2.easeInOut }, '<')
})

function viewOtherProject(src, i, animate) {
   otherprojViewImg.src = src
   otherprojViewDribbble.href = otherWorkDribbble[i].href
   otherprojViewBehance.href = otherWorkBehance[i].href

   otherProjCurrent = i

   if(i == 0) {
      prevOtherProj.classList.add('disabled')
   }
   else if(i == (otherWorks.length-1)) {
      nextOtherProj.classList.add('disabled')
   }
   else {
      prevOtherProj.classList.remove('disabled')
      nextOtherProj.classList.remove('disabled')
   }

   if(animate) {
      gsap.timeline()
      .to('.otherProjectView', 0, { scale: 1 })
      .to('.otherProjectView', 0.2, { opacity: 1, pointerEvents: 'all' })
      .from('.otherProjectView .img-cont', 0.7, { width: 0, ease: Power2.easeInOut })
      .from('.otherProjectView .img-cont img', 0.7, { scale: 1.7, ease: Power2.easeInOut }, '<')
      .from('.otherProjectView .content', 0.3, { opacity: 0 })
   }
}

var controller = new ScrollMagic.Controller()

if(window.innerWidth > 800) {

   var navanimation = gsap.timeline()
   .from('#navbar', 0.2, { y: '-100%', ease: Power2.easeInOut })
   .from('#navbar li', 0.2, { y: '-100%', stagger: 0.05, ease: Power2.easeInOut, delay: '-0.1'}) 
   .from('#navbar .logo', 0.3, { y: '-100%', ease: Power2.easeInOut }, '<') 
   
   new ScrollMagic.Scene({
      triggerElement: '#mainwork',
      triggerHook: 0.2
   })
   .setTween(navanimation)
   .addTo(controller)
   
}

if(window.innerWidth < 800) {
   new ScrollMagic.Scene({
      triggerElement: 'footer',
      triggerHook: 1,
      offset: '-50%'
   })
   .setTween(gsap.to('#bottom-nav', 0.3, { y: '100%' }))
   .addTo(controller)
}

var allprojects = document.querySelectorAll('.proj')

allprojects.forEach(project => {
   new ScrollMagic.Scene({
      triggerElement: project,
      triggerHook: 0.7,
      reverse: false
   })
   .setTween(gsap.from(project, 0.4, { opacity: '0', scale: 0.9, ease: Power2.easeInOut }))
   .addTo(controller)
})

var headerTimeline = gsap.timeline({delay: 1.5})
.to('.load', 0.3, { scale: 0.5, opacity: 0, ease: Power2.easeOut })
.from('header .img-cont', 0.7, { height: '0', ease: Power2.easeInOut })
.from('header .overlay', 0.7, { height: '0', ease: Power2.easeInOut }, '<')
.from('header .img-cont img', 0.7, { scale: '2', ease: Power2.easeInOut }, '<')
.from('.header-title span h1', 1.1, { y: '105%', stagger: 0.17, ease: Power2.easeInOut })
.from('.headerNav li', 0.5, { opacity: 0, y: '-100%', stagger: 0.09, ease: Power2.easeInOut })
.from('.start-proj', 0.5, { opacity: '0', scale: 0.7, stagger: 0.2, ease: Power2.easeInOut }, '<')

}

