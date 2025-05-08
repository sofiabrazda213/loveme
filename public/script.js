// Animate loading text
gsap.to("#loading-text", {
    opacity: 0.2,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
 // After 3 seconds, fade out loading screen and show nav
setTimeout(() => {
    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".nav-menu-screen").style.display = "flex";
        gsap.from(".nav-list li", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 1
        });
      }
    });
  }, 3000);
  