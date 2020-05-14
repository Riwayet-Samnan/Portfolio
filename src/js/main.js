import '../styles/main/main.sass'
import { gsap, Power2, Power1, Power3 } from 'gsap'
import { projects, setLinks, handleSidebar } from './imports'

if(window.outerWidth > 2100) {
   document.querySelector('html').style.fontSize = '130%'
   document.querySelector('form').style.gridTemplateColumns = '330px !important'
}

setLinks()
handleSidebar()

function manCode() {

// * Split text animation

var headerTitle = document.querySelector('.header-title')
var headerTitleSplit = headerTitle.innerHTML.split(' ')
headerTitle.innerHTML = ''

headerTitleSplit.forEach(text => {
   headerTitle.innerHTML += `<span><h1>${text}</h1></span>`
})


// * Header startup animation

var headerTimeline = gsap.timeline()
.to('body', 0, { overflowY: 'scroll' })
.to('.startup-screen .step-one', 0.4, { opacity: 1, y: '0', delay: '0.5' })
.to('.startup-screen .step-one', 0.2, { scale: 1.2, opacity: '0', ease: Power2.easeInOut, delay: '0.8' })
.to('.startup-screen .step-two', 0.4, { opacity: 1,  ease: Power2.easeInOut, y: '0' })
.to('.startup-screen .step-two', 0.2, { scale: 1.2,  ease: Power2.easeInOut, opacity: '0', delay: '0.8' })
.fromTo('.startup-screen .watermark.one', 5, { x: '-20%' }, { x: '20%' }, '-= 4')
.fromTo('.startup-screen .watermark.two', 5, { x: '20%' }, { x: '-20%' }, '-= 4')
.to('.startup-screen .watermark.one', 0.3, { opacity: 0, x: '50%' }, '<')
.to('.startup-screen .watermark.two', 0.3, { opacity: 0, x: '-50%' }, '<')
.fromTo('.startup-screen .watermark.two', 5, { x: '20%' }, { x: '-20%' }, '-= 4')
.from('header .cont', 0.9, { width: 0, ease: Power1.easeInOut, delay: '0.5' }, '<')
.from('header .header-title h1', 1, { y: '110%', stagger: 0.17, delay: '0.5', ease: Power2.easeInOut }, '<')
.from('.header-subtitle', 0.4, { y: '50%', opacity: 0, stagger: '0.15', ease: Power2.easeInOut, delay: '-0.4' })
.from('header .links a', 0.4, { y: '30%', opacity: 0, stagger: '0.2', ease: Power2.easeInOut, delay: '-0.2' })
.from('.header-nav li', 0.45, { opacity: 0, y: '-100%', ease: Power2.easeInOut, stagger: '0.08' }, '<')

if(window.innerWidth < 500) {
   headerTimeline.from('#navbar', 0.3, { y: '-100%', ease: Power2.easeInOut })
   headerTimeline.from('#bottom-nav', 0.3, { y: '100%', ease: Power2.easeInOut }, '<')
}

// * ScrollMagic

var controller = new ScrollMagic.Controller()

var aboutanimation = gsap.timeline()
.from('#About .cont', 0.8, { width: 0, ease: Power2.easeInOut })
.from('#About .cont img', 0.8, { scale: 2, ease: Power2.easeInOut }, '<')
.from('#About .text-cont .anim', 0.5, { opacity: 0, y: '30%', stagger: '0.1', ease: Power2.easeInOut })
.from('#About .text-cont a', 0.3, { opacity: 0, ease: Power2.easeInOut, delay: '-0.2' })

new ScrollMagic.Scene({
   triggerElement: '#About',
   triggerHook: 0.7,
   reverse: false
})
.setTween(aboutanimation)
.addTo(controller)

var skillsanimation = gsap.timeline()
.from('#Skills img', 0.8, { opacity: 0, scale: 0, stagger: 0.1, ease: Power2.easeInOut })
.from('#Skills p', 0.7, { opacity: 0, y: '100%', stagger: 0.1, delay: '0.2', ease: Power2.easeInOut }, '<')

new ScrollMagic.Scene({
   triggerElement: '#Skills',
   triggerHook: 0.6,
   reverse: false
})
.setTween(skillsanimation)
.addTo(controller)

var projectsfirst = gsap.timeline()
.from('#Projects .img-cont.one', 0.7, { width: 0, stagger: 0.3, ease: Power2.easeInOut })
.from('#Projects .img-cont.one img', 0.7, { scale: 2, stagger: 0.3, ease: Power2.easeInOut }, '<')
.from('#Projects button p.one', 0.5, { x: '-50%', opacity: 0, stagger: 0.2, ease: Power2.easeInOut, delay: '-0.3' })

new ScrollMagic.Scene({
   triggerElement: '#Projects .img-cont.one',
   triggerHook: 0.7,
   reverse: false
})
.setTween(projectsfirst)
.addTo(controller)

var projectsfirst = gsap.timeline()
.from('#Projects .img-cont.two', 0.7, { width: 0, stagger: 0.3, ease: Power2.easeInOut })
.from('#Projects .img-cont.two img', 0.7, { scale: 2, stagger: 0.3, ease: Power2.easeInOut }, '<')
.from('#Projects button p.two', 0.5, { x: '-50%', opacity: 0, stagger: 0.2, ease: Power2.easeInOut, delay: '-0.3' })

new ScrollMagic.Scene({
   triggerElement: '#Projects .img-cont.two',
   triggerHook: 0.7,
   reverse: false
})
.setTween(projectsfirst)
.addTo(controller)

if(window.innerWidth > 500) {

var navanimation = gsap.timeline()
.from('#navbar', 0.2, { y: '-100%', ease: Power2.easeInOut })
.from('#navbar li', 0.2, { y: '-100%', stagger: 0.05, ease: Power2.easeInOut, delay: '-0.1'}) 
.from('#navbar .logo', 0.3, { y: '-100%', ease: Power2.easeInOut }, '<') 

new ScrollMagic.Scene({
   triggerElement: '#About',
   triggerHook: 0.7
})
.setTween(navanimation)
.addTo(controller)

}

new ScrollMagic.Scene({
   triggerElement: '#Contact',
   triggerHook: 0.3,
})
.setTween(gsap.to('#bottom-nav', 0.2, { y: '100%', ease: Power2.easeInOut }))
.addTo(controller)

}

window.addEventListener('load',() => {
   gsap.to('.load', 1, {scale: 0, opacity: 0, pointerEvents: 'none'})
   manCode()
})

// * project viewing system

var projectButtons = document.querySelectorAll('#Projects button')
var projectImages = document.querySelectorAll('#Projects img')

var projectViewImg = document.querySelector('.projectView img')
var projectViewTitle = document.querySelector('.projectView .title')
var projectViewDes = document.querySelector('.projectView p')
var projectViewDribbble = document.querySelector('.projectView .dribbble')
var projectViewBehance = document.querySelector('.projectView .behance')

var backdrop = document.querySelector('.backdrop')
var projectCloseBtn = document.querySelector('.projectCloseBtn')

var nextButton = document.querySelector('.next')
var prevButton = document.querySelector('.prev')

var projectNum = 0

projectButtons.forEach((el, i) => {
   el.addEventListener('click', () => {
      setProject(projectImages[i].src, i, true)
   })
})

backdrop.addEventListener('click', closeProject)
projectCloseBtn.addEventListener('click', closeProject)

nextButton.addEventListener('click', () => setProject(projectImages[projectNum+1].src, projectNum+1, false))
prevButton.addEventListener('click', () => setProject(projectImages[projectNum-1].src, projectNum-1, false))

function closeProject() {
   gsap.timeline()
   .to('body', 0, { overflowY: 'scroll' })
   .to('.projectView', 0.2, { scale: 0.5, opacity: 0, ease: Power2.easeInOut })
   .to('.backdrop', 0.2, { opacity: 0, pointerEvents: 'none', ease: Power2.easeInOut }, '<')
   .to('.projectView .main-thing', 0, { pointerEvents: 'none' }, '<')
   .to('.projectCloseBtn', 0.3, { scale: 0, x: '-50%' }, '<')
}

function showProject() {
   gsap.timeline()
   .to('body', 0, { overflow: 'hidden' })
   .to('.projectView', 0.3, { scale: 1, opacity: 1, ease: Power2.easeInOut })
   .to('.backdrop', 0.2, { opacity: 0.9, pointerEvents: 'all', ease: Power2.easeInOut }, '<')
   .to('.projectView .main-thing', 0, { pointerEvents: 'all' }, '<')
   .to('.projectCloseBtn', 0.4, { scale: 1, x: '-50%' })
}

function setProject(src, i, animation) {
   projectViewImg.src = src 
   projectViewTitle.innerHTML = projects[i].title
   projectViewDes.innerHTML = projects[i].paragraph
   projectViewDribbble.href = projects[i].dribbble 
   projectViewBehance.href = projects[i].behance

   projectNum = i

   if(i == 0) {
      prevButton.style.pointerEvents = 'none'
      prevButton.style.opacity = '0.6'
   }
   else if(i == 3) {
      nextButton.style.pointerEvents = 'none'
      nextButton.style.opacity = '0.6'
   } else {
      prevButton.style.pointerEvents = ''
      prevButton.style.opacity = ''
      nextButton.style.pointerEvents = ''
      nextButton.style.opacity = ''
   }

   if(animation) {
      showProject()
   }
}
