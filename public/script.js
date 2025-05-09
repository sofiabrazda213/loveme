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
    try {
      console.log("Fetching books...");
      const response = await fetch("https://gutendex.com/books/?languages=en&topic=poetry");
      const data = await response.json();
      const books = data.results;
      console.log("Books received:", books);
  
      const randomBook = books[Math.floor(Math.random() * books.length)];
      const textUrl = randomBook.formats["text/plain; charset=utf-8"] || randomBook.formats["text/plain"];
      console.log("Selected book:", randomBook.title);
      console.log("Text URL:", textUrl);
  
      if (!textUrl) throw new Error("No plain text available for this book.");
  
      const textRes = await fetch(textUrl);
      const text = await textRes.text();
      const lines = text.split('\n').filter(line => line.length > 40 && line.length < 120);
      console.log("Filtered lines:", lines.length);
  
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      document.getElementById("quote-text").innerText = randomLine.trim();
    } catch (error) {
      console.error("Error fetching or processing line:", error);
      document.getElementById("quote-text").innerText = "Failed to load line. Try again.";
    }
  }  

  window.onload = generateLine;
  window.generateLine = generateLine;
}

  