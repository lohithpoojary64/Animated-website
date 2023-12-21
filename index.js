gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






function mainPart(){ 
var page = document.querySelector(".page1-content");
var cursor = document.querySelector(".cursor");

page.addEventListener("mousemove",(val)=>{
gsap.to(cursor,{
    x:val.x,
    y:val.y
})
})

page.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale : 1,
        opacity : 1
    })
    
})
page.addEventListener("mouseleave",function(){
    
        gsap.to(cursor,{
            scale : 0,
            opacity : 0
        })
        
    })
}
mainPart()

function page2Animation(){
    gsap.from(".page2-content2 h1",{
      y:120,
      stagger:0.2,
      duration:1,
      scrollTrigger:{
             trigger:".page2",
             scroller:".main",
             start:"top 47%",
             stop:"top 30%",
             
            
             scrub:2


      }


    })



}
page2Animation()

function mainPart2(){ 
  var page1 = document.querySelector(".page4-content");
  var cursor1 = document.querySelector(".cur");
  
  page1.addEventListener("mousemove",(val)=>{
  gsap.to(cursor1,{
      x:val.x,
      y:val.y
  })
  })
  
  page1.addEventListener("mouseenter",function(){
      gsap.to(cursor1,{
          scale : 1,
          opacity : 1
      })
      
  })
  page1.addEventListener("mouseleave",function(){
      
          gsap.to(cursor1,{
              scale : 0,
              opacity : 0
          })
          
      })
  }
  mainPart2()

function swiperScroll(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2100,
      disableOnInteraction: true,
    },
  });}

  swiperScroll();

 function timeLine(){
  var t = gsap.timeline();
 t.from(".loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.2
 });

 t.from(".loader h2",{
  y:40,
  opacity:0,
  stagger:0.2,
 });

 t.to(".loader ",{
  opacity:0,
  
 });
 t.to(".loader ",{
  display:"none"
 })

 t.from(".page1-content span",{
  y:100,
  opacity:0,
  stagger:0.1
 })
 };
 timeLine();

 