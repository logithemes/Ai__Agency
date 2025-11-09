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

// Left to right marquee (original)
const trainsLeft = document.querySelectorAll(".marquee-train-left");
trainsLeft.forEach((train, i) => {
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

// Right to left marquee (new)
const trainsRight = document.querySelectorAll(".marquee-train-right");
trainsRight.forEach((train, i) => {
  const trainWidth = train.scrollWidth / 1; 
  gsap.to(train, {
    x: `+=${trainWidth}`, // Positive value for right to left
    duration: 20,          
    ease: "none",
    repeat: -1,            
    modifiers: {
      x: gsap.utils.unitize(x => {
        const parsedX = parseFloat(x);
        // For right to left, we need to handle the modulo differently
        // to ensure continuous looping from right to left
        return parsedX % trainWidth;
      })
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


// HOME ONE PORTFOLIOS
document.querySelectorAll(".img-hover-3d").forEach((img) => {
  img.addEventListener("mousemove", (ev) => {
    const rect = img.getBoundingClientRect();
    const offsetX = ev.clientX - rect.left;
    const offsetY = ev.clientY - rect.top;

    const rotateY = gsap.utils.clamp(-1, 1, ((offsetX / rect.width) - 0.5) * 30);
    const rotateX = gsap.utils.clamp(-1, 1, ((offsetY / rect.height) - 0.5) * -30);

    gsap.to(img, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 800,
      ease: "power2.out",
      duration: 0.3
    });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out",
      duration: 0.5
    });
  });
});




// HOME TWO
gsap.registerPlugin(ScrollTrigger);

const projectsSection = document.querySelector('.projects-section');
const projectsBoxes = document.querySelector('.home-two-projects-boxes');
let mouseX = 0;
let targetX = 0;
const maxMovement = 400; 
gsap.set(projectsBoxes, { x: 0 });
projectsSection.addEventListener('mousemove', (e) => {
  const rect = projectsSection.getBoundingClientRect();
  const sectionCenter = rect.width / 2;
  mouseX = ((e.clientX - rect.left) - sectionCenter) / sectionCenter;
  targetX = -mouseX * maxMovement;
});
gsap.ticker.add(() => {
  gsap.to(projectsBoxes, {
    x: targetX,
    duration: 0.8,
    ease: "power2.out"
  });
});

projectsSection.addEventListener('mouseleave', () => {
  targetX = 0;
});



