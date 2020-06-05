window.onload = function() {
    
    const timeline = gsap.timeline();

    timeline.to('.first-section',   {left: 25,  duration: 1})
            .to('.img1-container',  {top: -50,  duration: 2})
            .to('.first-section',   {top: 20,   duration: 1, width: '300px', height: '100px' })
            .to('.second-section',  {left: 25,  duration: 1, delay: -1})
            .to('.img2-container',  {top: -50,  duration: 2})
            .to('.second-section',  {top: 140,  left: 75, duration: 1, width: '300px', height: '100px'})
            .to('.third-section',   {left: 25,  duration: 1, delay: -1})
            .to('.img3-container',  {top: -50,  duration: 1})
            .to('.third-section',   {top: 260,  duration: 2, width: '300px', height: '100px'})
            .to('.bottom-section',  {left: 25,  duration: 1, delay: -2})
            .to('.text-container',  {left: 0,   duration: 1, delay: -2})
            .to('.cta-button',      {autoAlpha: 1,   duration: 0.5})
            .to('.first-section',   {left: -280, duration: 1, ease: "elastic.in(1,1)"})
            .to('.second-section',  {left: 380,  duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.third-section',   {left: -280, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.bottom-section',  {bottom: -150, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.cta-button',      {top: 550, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('#logo',            {autoAlpha: 1, scale: 0.8, duration:1})
            .to('.shine',           {left:400,    duration: 1})
            .to('#logo',            {top: 420, rotate: '0deg', ease: 'bounce.out', duration:1, delay:0.5})
            .to('.first-section',   {left: 25, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.second-section',  {left: 75,  duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.third-section',   {left: 25, duration: 1, ease: "elastic.in(1,1)", delay:-1})
}
