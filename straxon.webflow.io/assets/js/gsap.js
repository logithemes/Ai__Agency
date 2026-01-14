
// HAMBURHGER MENU
document.querySelectorAll(".navbar-three-hamburger, .navbar-three-toggle, .humburger-wrapper").forEach((hamburger) => {
    
    const barOne = hamburger.querySelector(
      ".navbar-three-bar-one, .humburger-bar-one"
    );

    const barTwo = hamburger.querySelector(
      ".navbar-three-bar-two,  .humburger-bar-two"
    );

    let isOpen = false;

    hamburger.addEventListener("click", () => {
      if (!isOpen) {
        // OPEN → Close icon
        gsap.to(barOne, {
          rotation: 45,
          y: 4,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.to(barTwo, {
          rotation: -45,
          y: -4,
          width: 24,
          duration: 0.3,
          ease: "power2.out"
        });

        isOpen = true;
      } else {
        // CLOSE → Hamburger
        gsap.to(barOne, {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.to(barTwo, {
          rotation: 0,
          y: 0,
          width: 12,
          duration: 0.3,
          ease: "power2.out"
        });

        isOpen = false;
      }
    });
  });


  // ARROW ROTATE
  

  
// MENU HOVER
// const breakpoint = 991;

// function isMobile() {
//   return window.innerWidth <= breakpoint;
// }

// document.querySelectorAll('.w-dropdown').forEach(dropdown => {
//   const list = dropdown.querySelector('.w-dropdown-list');
//   const icon = dropdown.querySelector('.w-icon-dropdown-toggle');

//   // Initial state
//   gsap.set(list, {
//     height: 0,
//     autoAlpha: 0,
//     overflow: 'hidden'
//   });

//   const open = () => {
//     gsap.killTweensOf(list);

//     gsap.to(list, {
//       height: 'auto',
//       autoAlpha: 1,
//       duration: 0.35,
//       ease: 'power2.out'
//     });

//     list.classList.add('w--open');
//   };

//   const close = () => {
//     gsap.killTweensOf(list);

//     gsap.to(list, {
//       height: 0,
//       autoAlpha: 0,
//       duration: 0.3,
//       ease: 'power2.inOut' // 👈 smooth close
//     });

//     list.classList.remove('w--open');
//   };

//   /* ---------------- DESKTOP HOVER ---------------- */
//   dropdown.addEventListener('mouseenter', () => {
//     if (!isMobile()) open();
//   });

//   dropdown.addEventListener('mouseleave', () => {
//     if (!isMobile()) close();
//   });

//   /* ---------------- MOBILE ICON CLICK (ACCORDION) ---------------- */
//   icon.addEventListener('click', e => {
//     if (!isMobile()) return;

//     e.preventDefault();
//     e.stopPropagation();

//     // Close all other dropdowns first
//     document.querySelectorAll('.w-dropdown-list.w--open').forEach(other => {
//       if (other !== list) {
//         gsap.killTweensOf(other);
//         gsap.to(other, {
//           height: 0,
//           autoAlpha: 0,
//           duration: 0.3,
//           ease: 'power2.inOut'
//         });
//         other.classList.remove('w--open');
//       }
//     });

//     // Toggle current dropdown
//     list.classList.contains('w--open') ? close() : open();
//   });
// });



// HOME ONE PORTFOLIO
gsap.registerPlugin(ScrollTrigger);

gsap.to(".home-one-portfolio-left, .home-one-portfolio-right", {
  y: -150,              // how much upward movement (negative = UP)
  ease: "none",
  scrollTrigger: {
    trigger: ".home-one-work",
    start: "top bottom",     // when .home-one-work enters viewport
    end: "bottom top",       // until it leaves viewport
    scrub: 1,                // smooth scroll animation
  }
});
    

// HOME TWO PORTFOLIOS
gsap.registerPlugin(ScrollTrigger);

gsap.to(".home-two-testimonial-row-one, .home-two-testimonial-row-two", {
  yPercent: -55,        // Moves up by 50% of the element’s own height
  ease: "none",
  scrollTrigger: {
    trigger: ".home-two-testimonial",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});


// mouse move landing cards
gsap.utils.toArray(".landing-cards").forEach(card => {
  
  const explore = card.querySelector(".explore-now");

  // Hover IN
  card.addEventListener("mouseenter", () => {
    gsap.to(explore, {
      scale: 1,
      duration: 0.4,
      ease: "power3.out"
    });
  });

  // Hover OUT
  card.addEventListener("mouseleave", () => {
    gsap.to(explore, {
      scale: 0,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power3.in"
    });
  });

  // Parallax on mouse move
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(explore, {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.1,
      ease: "power2.out"
    });
  });

});




gsap.registerPlugin(ScrollTrigger);

const progressSection = document.querySelector('.progress-scroll');

if (progressSection) {
  const bars = progressSection.querySelectorAll('.about-progress-gradiant-bar');

  // Target widths for each bar (based on your text)
  const targetWidths = [95, 91, 98];

  gsap.fromTo(
    bars,
    { width: "0%" },
    {
      width: (i) => `${targetWidths[i]}%`,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3, // bars fill one after another
      scrollTrigger: {
        trigger: progressSection,
        start: "top 80%", // when section enters viewport
        once: true,       // run only once
      },
    }
  );
}


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
// Utility: clone children until container width is filled at least twice
function fillWithClones(train) {
  const containerWidth = train.parentElement.offsetWidth;
  let totalWidth = train.scrollWidth;

  // Keep cloning until we have at least 2x container width
  while (totalWidth < containerWidth * 1) {
    // Clone all children
    Array.from(train.children).forEach((child) => {
      const clone = child.cloneNode(true);
      train.appendChild(clone);
    });
    totalWidth = train.scrollWidth;
  }

  return totalWidth;
}

// Left to right marquee
const trainsLeft = document.querySelectorAll(".marquee-train-left");
trainsLeft.forEach((train) => {
  const trainWidth = fillWithClones(train);

  gsap.to(train, {
    x: `-=${trainWidth / 1}`,   // move by half (since cloned)
    duration: 50,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (trainWidth / 2))
    }
  });
});

const trainsLeftHome = document.querySelectorAll(".home-three-marquee");
trainsLeftHome.forEach((train) => {
  const trainWidth = fillWithClones(train);

  gsap.to(train, {
    x: `-=${trainWidth / 2}`,   // move by half (since cloned)
    duration: 50,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (trainWidth / 1))
    }
  });
});


// Right to left marquee
const trainsRight = document.querySelectorAll(".marquee-train-right");
trainsRight.forEach((train) => {
  const trainWidth = fillWithClones(train);

  gsap.to(train, {
    x: `+=${trainWidth / 2}`,   // move opposite direction
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (trainWidth / 2))
    }
  });
});



  
});


// HOME ONE PORTFOLIOS
document.querySelectorAll(".img-hover-3d").forEach((img) => {
  img.addEventListener("mousemove", (ev) => {
    const rect = img.getBoundingClientRect();
    const offsetX = ev.clientX - rect.left;
    const offsetY = ev.clientY - rect.top;

    const rotateY = gsap.utils.clamp(-0.5, 0.5, ((offsetX / rect.width) - 0.5) * 30);
    const rotateX = gsap.utils.clamp(-0.5, 0.5, ((offsetY / rect.height) - 0.5) * -30);

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



// SERVICES ONE TAB
document.addEventListener("shown.bs.tab", (event) => {
  const targetPane = document.querySelector(event.target.getAttribute("href"));
  const image = targetPane.querySelector("img");

  // Animate with GSAP
  gsap.fromTo(image,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
  );
});


  


// HOME TWO  TESTIMONALS
gsap.registerPlugin(ScrollTrigger);

// START POSITION (translateX 100%)
gsap.set(".home-two-testimonial-heading", {
  x: "100%"
});

// ON ENTER → SLIDE IN
gsap.to(".home-two-testimonial-heading", {
  x: "0%",
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".home-two-testimonial",
    start: "top 80%",   // when section enters screen
  }
});

// PARALLAX MOVE IN NEGATIVE X WHILE SCROLLING
gsap.to(".home-two-testimonial-heading", {
  x: "-60%",            // adjust negative movement
  ease: "none",
  scrollTrigger: {
    trigger: ".home-two-testimonial",
    start: "top bottom",
    end: "bottom top",
    scrub: 2
  }
});



// LINE HEIGNT PORJECT
gsap.registerPlugin(ScrollTrigger);

// run only if lines exist on this page
if (document.querySelector(".scroll-line-ani") && document.querySelector(".line")) {

  gsap.to(".line", {
    height: "100%",
    ease: "none",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".scroll-line-ani",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });

}






