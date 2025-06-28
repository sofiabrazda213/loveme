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


  function loadGallerySection(section) {
    const display = document.getElementById("gallery-display");

    if (section === 'photography') {
      display.innerHTML = `
    <div class="photo-grid-scroll">
      <div class="photo-grid">
        ${[
          'b-w72.JPG',
          'b-w71.JPG',
          'b-w70.JPG',
          'b-w69.JPG',
          'b-w68.JPG',
          'b-w67.JPG',
          'b-w66.JPG',
          'b-w65.JPG',
          'b-w64.JPG',
          'b-w63.JPG',
          'b-w62.JPG',
          'b-w61.JPG',
          'b-w60.JPG',
          'b-w59.JPG',
          'b-w58.JPG',
          'b-w57.JPG',
          'b-w56.JPG',
          'b-w55.JPG',
          'b-w54.JPG',
          'b-w53.JPG',
          'b-w52.JPG',
          'b-w51.JPG',
          'b-w50.JPG',
          'b-w49.JPG',
          'b-w48.JPG',
          'b-w47.JPG',
          'b-w46.JPG',
          'b-w45.JPG',
          'b-w44.JPG',
          'b-w43.JPG',
          'b-w42.JPG',
          'b-w41.JPG',
          'b-w40.JPG',
          'b-w39.JPG',
          'b-w38.JPG',
          'b-w37.JPG',
          'b-w36.JPG',
          'b-w35.JPG',
          'b-w34.JPG',
          'b-w33.JPG',
          'b-w32.JPG',
          'b-w31.JPG',
          'b-w30.JPG',
          'b-w29.JPG',
          'b-w28.JPG',
          'b-w27.JPG',
          'b-w26.JPG',
          'b-w25.JPG',
          'b-w24.JPG',
          'b-w23.JPG',
          'b-w22.JPG',
          'b-w21.JPG',
          'b-w20.JPG',
          'b-w19.JPG',
          'b-w18.JPG',
          'b-w17.JPG',
          'b-w16.JPG',
          'b-w15.JPG',
          'b-w14.JPG',
          'b-w13.JPG',
          'b-w12.JPG',
          'b-w11.JPG',
          'b-w10.JPG',
          'b-w9.JPG',
          'b-w8.JPG',
          'b-w7.JPG',
          'b-w6.JPG',
          'b-w5.JPG',
          'b-w4.JPG',
          'b-w3.JPG',
          'b-w2.JPG',
          'b-w1.JPG'
]
          .map(
            (src) => `
              <div class="photo-tile">
                <img src="images/b-w/${src}" alt="${src}" loading="lazy">
              </div>`
          )
          .join('')}
      </div>
    </div>`;
} else if (section === 'portal') {
  const display = document.getElementById('gallery-display');
  
  const images = [
    'bow-art.png',
    'girl-with-gun.png',
    'hm.png',
    'i-live-life-in-color.png',
    'i-will-treasure-you..png',
    'lady-mujer.png',
    'maybe-now-you\'ll-get-it.png',
    'muy-muy-rockera.png',
    'muy-rockera.png',
    'on-a-pink-bed.png',
    'portal.png',
    'skull-man.png',
    'Sofia-xx.png',
    'take-my-heart-but-not-my-art.png',
    'well-it-is.png',
    'well-itsmy-art.png'
  ];

  display.innerHTML = `
    <div class="portal-gallery">
      ${images.map(src => `
        <div class="gallery-card internet-preview">
          <img src="images/sketchbook/${src}" alt="${src}">
        </div>
      `).join('')}
    </div>
  `;

    } else if (section === 'scroll') {
      display.innerHTML = `
        <div class="scroll-gallery-content">
          <img src="bow-art.png" alt="">
          <img src="girl-with-gun.png" alt="">
          <img src="hm.png" alt="">
          <img src="i-live-life-in-color.png" alt="">
          <img src="i-will-treasure-you.png" alt="">
          <img src="lady-mujer.png" alt="">
        </div>`;
    }
  }

//gallery.html
function openPortalGallery(images) {
  const container = document.getElementById('modal-image-container');
  container.innerHTML = images.map(src => `
    <img src="images/sketchbook/${src}" alt="${src}" class="modal-image-item">
  `).join('');
  document.getElementById('gallery-modal').classList.remove('hidden');
}

function closeImage() {
  document.getElementById('gallery-modal').classList.add('hidden');
  document.getElementById('modal-image-container').innerHTML = ''; // Clear images
}

window.openImage = openImage;
window.closeImage = closeImage;
window.openPortalGallery = openPortalGallery;

function openGalleryScroll() {
  document.getElementById("scroll-gallery-modal").classList.remove("hidden");
}

function closeGalleryScroll() {
  document.getElementById("scroll-gallery-modal").classList.add("hidden");
}
  