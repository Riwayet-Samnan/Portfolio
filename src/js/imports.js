import { gsap, Power2, Power3 } from 'gsap'

var projects = [
   {
      title: 'Slint',
      paragraph: `My first chat app built with vanila javascript and Firebase. But this current one is in progress. The old version of it <a href='https://slint.netlify.com'>here</a>`,
      behance: 'https://www.behance.net/gallery/95873235/Slint',
      dribbble: 'https://dribbble.com/shots/10971109-Dark-theme-for-my-chat-app'
   },
   {
      title: 'Lake',
      paragraph: `This was my first complete illustration ever. An illustration about a lake and mountains enviroment`,
      dribbble: 'https://dribbble.com/shots/11256517-Lake-illustration',
      behance: 'https://www.behance.net/gallery/96171403/Remember-a-vacation'
   },
   {
      title: 'Night sky',
      paragraph: `An illustration about a peacefull night with a big glowing moon and stars in the sky`,
      dribbble: 'https://dribbble.com/shots/11281888-Night-sky-savana',
      behance: 'https://www.behance.net/gallery/96501251/Night-sky-savana'
   },
   {
      title: 'Simple Coffee Site',
      paragraph: `A simple design of a website about my favourite drink`,
      dribbble: 'https://dribbble.com/shots/11262636-Simple-Coffee-Site',
      behance: 'https://www.behance.net/gallery/95865073/Simple-Coffee-site'
   }
]

function setLinks() {
   var links = document.querySelectorAll('a')

   links.forEach(link => {
      if(link.classList.contains('navlink') ) {
         link.setAttribute('target', '')
      } else {
         link.setAttribute('target', '_blank')
      }
   })
}

function handleSidebar() {
   var navOpenButton = document.querySelector('.navbutton')
   var navCloseButton = document.querySelector('.navclosebutton')

   var sidebartimeline = gsap.timeline()

   navOpenButton.addEventListener('click', () => {
      sidebartimeline
      .to('body', 0, { overflowY: 'hidden', ease: Power2.easeInOut })
      .to('#sidebar', 0.6, { y: '0', ease: Power2.easeInOut })
      .from('#sidebar .left', 0.7, { x: '-30%' , opacity: 0, stagger: 0.2, ease: Power3.easeInOut, delay: '-0.3' })
      .from('#sidebar .right', 0.7, { x: '30%', opacity: 0, stagger: 0.2, ease: Power3.easeInOut }, '<')
      .from('#sidebar .navclosebutton', 0.3, { scale: 0, ease: Power3.easeOut })
   })

   navCloseButton.addEventListener('click', () => {
      gsap.timeline()
      .to('#sidebar', 0.5, { y: '-100%', ease: Power2.easeInOut })
      .to('body', 0, { overflowY: 'scroll', ease: Power2.easeInOut }, '<')
   })
}

export { projects, setLinks, handleSidebar }
