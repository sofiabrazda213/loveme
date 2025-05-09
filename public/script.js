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

// Only run quote generator if on home.html
if (window.location.pathname.includes("home.html")) {
  async function generateLine() {
    const bookIDs = [1342, 11, 84, 1661]; // You can expand this list
    const randomID = bookIDs[Math.floor(Math.random() * bookIDs.length)];

    try {
      const response = await fetch(`https://www.gutenberg.org/files/${randomID}/${randomID}-0.txt`);
      const text = await response.text();
      const lines = text.split('\n').filter(line => line.length > 40 && line.includes('Gutenberg'));
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      document.getElementById('quote-text').innerText = randomLine.trim();
    } catch (error) {
      document.getElementById('quote-text').innerText = 'Failed to load. Try again.';
    }
  }

  window.onload = generateLine;
}

  