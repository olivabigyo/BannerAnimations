const tl = new gsap.timeline();

// Setup
tl.set('.marker', { y: -610 })
    .set('.house_part', { y: 800 })
    .set('#swiss_map', { visibility: 'hidden' })
    .set('#sofa', { visibility: 'hidden', scale: 0.25})
    .set('#workstation', { visibility: 'hidden' })
    .set('.logo', { visibility: 'hidden', scale: 0.8 }) 
    .set('#browser', {display:'none' })
// Phase 1
// ikea buliding as a cube and swiss map with markers
    .from('.cube_viewport', { y: -600, duration: 2, ease: 'elastic.out(1, 0.3)' })
    .to('.cube', {
        rotationY: -65, stagger: {
            each: 0.1,
            from: "start",
            ease: "none"
        }, delay: 0.2
    })
    .from('#swiss_map', { y: 600, autoAlpha:1,  duration: 0.5, ease: 'power2.out', delay:-1.5 })
    .to('#map_layers', { scaleY: 0.7, transformOrigin: '50% 50%', duration: 1, delay:-0.5 })
    .to('.marker', { y: 0, duration: 1, stagger: { amount: 1 }, ease: 'power2.out' })
    .to('.cube', {
        rotationY: -155, delay: -0.5, stagger: {
            each: 0.1,
            from: "start",
            ease: "none"
        }
    })
    .to('.cube', {
        rotationY: -245, stagger: {
            each: 0.1,
            from: "start",
            ease: "none"
        }, delay: 1
    })
// Phase 2 Part 1
// house and sofa
    .to('.cube_viewport',{x: -500, autoAlpha:0, duration: 1, delay:0.5})
    .to('#swiss_map',{x: 500, autoAlpha:0, duration: 1, delay:-1})
    .to('.house_part', { y: 0, duration: 1, delay: -1, stagger: { amount: 0.8 }, ease: 'back.out(1.5)' })
    .fromTo('.smoky',{scale:0.1}, {scale:1, stagger: {amount:0.5, ease: 'power2.out'}, duration:1, delay:-0.5})
    .to('#house', {scale:4, x: -580, y:-300, ease: 'power2.out', duration: 1.5, delay:-0.4})
    .to('#sofa', {autoAlpha:1, duration: 1, delay:-1})
    .to('#house', {autoAlpha:0, duration: 0.4})
    .to('#sofa', {scale:1, ease: "back.out(1.7)", duration: 1.5, delay: -0.4})
// Phase 2 Part 2
// workstation and computer
    .to('#sofa', {x: -1150, duration: 2})
    .fromTo('#workstation', {x:1100, y:-50}, {y:0, x:0, autoAlpha:1, duration: 2, delay:-2})
    .fromTo('#chair', {x:150}, {x:0, duration: 2, delay:-1.5})
    .fromTo('#calendar', {rotate:-10}, {rotate: 10, transformOrigin: 'top center', duration: 0.5, delay:-1.5})
    .fromTo('#calendar', {rotate: 10}, {rotate: -10, transformOrigin: 'top center', duration: 0.5, delay:-1})
    .fromTo('#calendar', {rotate: -10}, {rotate: 0, transformOrigin: 'top center', duration: 0.5, delay:-0.5})
    .fromTo('#lamp', {scaleX: -1}, {scaleX:1, duration: 2, delay:-1.5})
    .to('#computer', {scale:3.2, x:-250, y:-100, duration: 1})
    .to('.not_computer', {autoAlpha:0, duration: 0.6, delay:-1})
    .to('#screen', {fill: 'white', duration: 0.2})
// Phase 2 Part 3
// computer screen
    .to('.text1', {
        text:"www.ikea.ch",
        duration: 2, 
        ease: 'linear'
      })
    .to('.text1', {autoAlpha:0, duration: 0.1, delay: -0.1})
    // Logo animation
    .to('.logo', {autoAlpha:1, scale: 1.5, ease: "back.out(3)", duration: 1})
    .to('#computer', {autoAlpha:0, duration: 0.1, delay: 0.5})
    .to('.logo', {autoAlpha:0, duration: 0.1})
// Phase 3
// browser and text plugin
    .set('#browser', {display:'block', visibility: 'hidden', scale: 0.1 })
    .to('#browser', {autoAlpha:1, scale: 1, duration: 0.4})
    .to('.text2', {
        text:"Entdecke die IKEA Welt",
        duration: 1, 
        ease: 'linear'
      })
    .to('.text3', {
        text:"bequem von zu Hause!",
        duration: 1, 
        ease: 'linear'
      })
