gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".header-footer-box, .story-image-wrapper",
  { scale: 0.7 },  
  {
    scale: 1,    // final value
    ease: "none", // keeps motion linear and natural
    scrollTrigger: {
      trigger: ".top-act",
      start: "top 50%",     // animation starts when section enters viewport
      end: "bottom 80%",    // ends when you scroll past most of the section
      scrub: true,          // makes the scale update dynamically with scroll
      markers: true         // (for testing) shows start/end markers
      // remove `scroller` unless you use a custom scroll container
    }
  }
);



//cursor



document.addEventListener('DOMContentLoaded', function() {
  // Infinite animation for top screenshots
  gsap.to('.screenshots.top', {
    y: "+=300",
    duration: 17,
    repeat: -1,
    ease: "none"
  });
  
  // Infinite animation for bottom screenshots 
  gsap.to('.screenshots.bottom', {
    y: "-=300",
    duration: 17,
    repeat: -1,
    ease: "none"
  });


  // JS (GSAP Seamless Marquee)
  gsap.registerPlugin(ModifiersPlugin);
  const trains = document.querySelectorAll(".contact-text-marquee-train");
  trains.forEach((train, i) => {
    const trainWidth = train.scrollWidth / 1; 
    gsap.to(train, {
      x: `-=${trainWidth}`,
      duration: 20,          
      ease: "none",
      repeat: -1,            
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % trainWidth)
      }
    });
  });


  // HOME ONE BANNER
    const heroSection = document.querySelector('.home-one-hero');
  const girlWrapper = document.querySelector('.girl-image-wrapper');
  const boyWrapper = document.querySelector('.little-boy-image-wrapper');
    const borderMovementBar = document.querySelector('.border-movement-bar');
  
  heroSection.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = heroSection.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    gsap.to(girlWrapper, {
      x: x * -20,
      y: y * -20,
      duration: 0.8,
      ease: "power2.out"
    });
    
    gsap.to(boyWrapper, {
      x: x * 20,
      y: y * 20,
      duration: 0.8,
      ease: "power2.out"
    });

     gsap.to(borderMovementBar, {
      x: x * 250,
      duration: 0.8,
      ease: "power2.out"
    });
  });
  
  heroSection.addEventListener('mouseleave', () => {
    gsap.to(girlWrapper, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });
    
    gsap.to(boyWrapper, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });
      gsap.to(borderMovementBar, {
      x: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});


// HOME ONE 



