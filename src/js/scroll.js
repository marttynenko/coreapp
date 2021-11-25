import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const scroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener('load',function(){

 
  let section = document.querySelector('.add__scroll');
  if (section) {
    // let add = document.querySelector('.add');
    // const scrollTop = add.offsetTop
    // gsap.fromTo(section, { x: 0 }, {
    //   scrollTrigger: {
    //     start: scrollTop,
    //     // end: "max",
    //     scrub: 0,
    //   },
    //   x: () => window.innerWidth - section.offsetWidth - 20,
    // });
    
    const trigger = document.querySelector('.add');
    const tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        // pinType: 'transform',
        trigger: trigger,
        start: "top top",
        end: "+=250",
        scrub: 1,
        markers: true
      }
    })
    tl.fromTo(section,{
      x: (index, target, targets) => {
        // const el = document.querySelector('.add_scroll');
        const listWidth = section.getBoundingClientRect().width
        const container = document.querySelector('.add__scroll-wrap').getBoundingClientRect().width
        return container - listWidth
      },
    },{
      x: 0
    })
  }


  // const gifResponsive = document.querySelector('.about');
  // const tl2 = gsap.timeline({
  //   scrollTrigger:{
  //     trigger: gifResponsive,
  //     start: 0,
  //     end: "max",
  //     onUpdate: updateValues
  //   },
  // });
  // tl2.to('.about__title',{opacity: 0.5})
  
  
  // function updateValues() {
  //   if (ScrollTrigger.isInViewport(gifResponsive)) {
  //     console.log('in')
  //   } else {
  //     console.log('none');
  //   }
  // }
  // updateValues();

  

  })
}


export { scroll };