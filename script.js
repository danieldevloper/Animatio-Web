// locomotive js - smooth scrolling

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// gsap to amimate

gsap.from(".nlink", {
    stagger: .2,
    y: 20,
    duration: 2,
    ease: Power2,
    opacity: 0
})


Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


  gsap.from(".anim2", {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease:  Expo,
    duration: 2
  })


   Shery.imageEffect("#imgntext img",{

      style: 3,
      config: {"uColor":{"value":true},"uSpeed":{"value":1.21,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.22,"range":[0,5]},"uFrequency":{"value":4.73,"range":[0,10]},"geoVertex":{"range":[1,64],"value":3.89},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500122687343573},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.51,"y":0.5}},"shapeEdgeSoftness":{"value":0.03,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      
     
    });


    Shery.imageEffect(".imgff img",{

      style: 5,
      config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.666623045213636},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.05,"y":0}},"shapeScale":{"value":{"x":0.65,"y":0.74}},"shapeEdgeSoftness":{"value":0.18,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":40.92},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":true},"uSpeed":{"value":0.64,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.34,"range":[0,5]},"uFrequency":{"value":6.49,"range":[0,10]}},
      
     
    });


    gsap.from("#imgntext img", {
      y: "90",
      opacity: 0,
      ease:  Expo,
      duration: 2
    })  

  
  Shery.imageEffect("#bimg",{

      style: 5,
      config:{"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0817066797823616},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      gooey: true,
      
     
    });

document.querySelector("#ftext button").addEventListener("mouseover",function(){
  gsap.to("#future video",{
    opacity:1,
    duration:1,
    ease:Power4,
  })
})

document.querySelector("#ftext button").addEventListener("mouseleave",function(){
  gsap.to("#future video",{
    opacity:0,
    duration:1,
    ease:Power4,
  })
})

 
//shery js to animate images accordingly