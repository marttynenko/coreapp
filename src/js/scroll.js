import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scroll = () => {
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
    
    // const trigger = document.querySelector('.add__list');
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: trigger,
    //     start: "top 50%",
    //     end: "+=250",
    //     scrub: 1,
    //     markers: true
    //   }
    // })
    // tl.to(section,{
    //   x: -550,
    // })
  }
  })
}


export { scroll };