// Animate loading text
gsap.to("#loading-text", {
    opacity: 0.2,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  // Wait 3 seconds then fade out loading screen and show content
  setTimeout(() => {
    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
        gsap.from(".main-content", { opacity: 0, y: 50, duration: 1 });
      }
    });
  }, 3000);
  