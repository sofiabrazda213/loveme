// Animate loading text
gsap.to("#loading-text", {
  opacity: 0.2,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// After 3 seconds, fade out loading screen and show nav
window.onload = () => {
  setTimeout(() => {
    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".nav-menu-screen").style.display = "flex";
        document.body.classList.add("loaded");
        gsap.from(".nav-list li", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 1
        });
      }
    });
  }, 3000);
};

// Only run quote generator if on home.html
// Only run quote generator if on home.html
if (window.location.pathname.includes("home.html")) {
  async function generateLine() {
    try {
      const response = await fetch("https://poetrydb.org/random");
      const data = await response.json();

      const poem = data[0];
      const title = poem.title;
      const poet = poem.author;
      const content = poem.lines.join("<br>");

      document.getElementById("quote-text").innerHTML =
        `<strong>${title}</strong><br><br>${content}<br><br><em>- ${poet}</em>`;
    } catch (error) {
      console.error("Error fetching poem:", error);
      document.getElementById("quote-text").textContent =
        "Failed to load poem. Try again.";
    }
  }

  // Load one when page loads
  window.onload = generateLine;

  // Optional: expose globally if you want to cal it via button
  window.generateLine = generateLine;
}

// Blog load
function openPost(id) {
  document.getElementById('blog-modal').classList.remove('hidden');
  document.querySelectorAll('.blog-entry').forEach(entry => entry.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function closePost() {
  document.getElementById('blog-modal').classList.add('hidden');
}

/* Draggable poem
function makeDraggable(el) {
  let isDragging = false;
  let offsetX, offsetY;

  el.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    el.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const container = document.querySelector('.poetry-container');
    const containerRect = container.getBoundingClientRect();
    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    // Constrain within container
    x = Math.max(0, Math.min(x, container.clientWidth - el.offsetWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - el.offsetHeight));

    el.style.left = x + 'px';
    el.style.top = y + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// Apply it
const poem = document.getElementById('draggable-poem');
makeDraggable(poem);
*/

//gallery.html
function openImage(imageId) {
  const modal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("modal-image");
  modalImage.src = document.querySelector(`[onclick="openImage('${imageId}')"] img`).src;
  modal.classList.remove("hidden");
}

function closeImage() {
  document.getElementById("gallery-modal").classList.add("hidden");
}

  