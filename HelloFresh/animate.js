// Storyboard

// Scene 1
// 1.   first-card moves in from left
// 2.   image-1 moves up, text1 appears
// 3.   first-card moves up scales down
//      second card moves in from right
// 4.   image-2 moves up text 2 appears
// 5.   second card moves up scales down
//      third-card moves in from left
// 6.   image-3 moves up text 3 appears
// 7.   third-card moves up scales down
//      bottom-card moves in from right, gradient background
//      text stays in place while card moving
// Scene 2
// 8.   CTA button appears
// 9.   cards move out (elastic ease)
//      CTA moves down
// 10.  logo appears, scale, rotate
//      logo animation, 'shine' left-to right
// 11.  logo moves down, bounce, rotate
//      cards (1-3) move back in
// End Phase: user interaction
// 12.  cards (1-3): hover info text appears
//      CTA to the hellofresh site

window.onload = function() {
    
    const timeline = gsap.timeline();
        // Scene 1 (1-7)
    timeline.to('.first-card',   {left: 25,  duration: 0.8})
            .to('.img1',  {top: -50,  duration: 1.2, ease: "power4.out"})
            .to('.first-card',   {top: 20,   duration: 0.8, width: '300px', height: '100px'})
            .to('.second-card',  {left: 25,  duration: 0.8, delay: -0.8})
            .to('.img2',  {top: -50,  duration: 1.2, ease: "power4.out"})
            .to('.second-card',  {top: 140,  left: 75, duration: 0.8, width: '300px', height: '100px'})
            .to('.third-card',   {left: 25,  duration: 0.8, delay: -0.8})
            .to('.img3',  {top: -50,  duration: 1.2, ease: "power4.out"})
            .to('.third-card',   {top: 260,  duration: 0.8, width: '300px', height: '100px'})
            .to('.bottom-card',  {left: 25,  duration: 0.8, delay: -0.8})
            // gradient and text (7)
            .to('.gradientBG',      {left: -100,  duration: 0.8, delay: -0.8})
            .to('.text-container',  {left: 100,   duration: 0.8, delay: -0.8})
        // Scene 2 (8-11)
            .to('.cta-button',   {autoAlpha: 1,   duration: 0.5})
            .to('.first-card',   {left: -280, duration: 1, ease: "elastic.in(1.5,1)", delay: 1})
            .to('.second-card',  {left: 380,  duration: 1, ease: "elastic.in(1.5,1)", delay:-1})
            .to('.third-card',   {left: -280, duration: 1, ease: "elastic.in(1.5,1)", delay:-1})
            .to('.bottom-card',  {bottom: -150, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.cta-button',   {top: 550,     duration: 1, ease: "elastic.in(1,1)", delay:-1})
            // Logo animation (10)
            .to('#logo',         {autoAlpha: 1, scale: 0.8, duration:1})
            .to('.shine',        {left:400,    duration: 1})
            // End Phase (11)
            .to('#logo',         {top: 420, rotate: '0deg', ease: 'bounce.out', duration:1, delay:0.5})
            .to('.first-card',   {left: 25, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.second-card',  {left: 75, duration: 1, ease: "elastic.in(1,1)", delay:-1})
            .to('.third-card',   {left: 25, duration: 1, ease: "elastic.in(1,1)", delay:-1})
}
