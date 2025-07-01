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

// LOAD GALLERY
function loadGallerySection(section) {
  const display = document.getElementById("gallery-display");

  if (section === 'photography') {
    const images = [
          'b-wnew.jpg',
          'b-w60.JPG',
          'b-w22.jpg',
          'b-w21.jpg',
          'b-w20.jpg',
          'b-w19.jpg',
          'b-w18.jpg',
          'b-w17.jpg',
          'b-w16.jpg',
          'b-w15.jpg',
          'b-w14.jpg',
          'b-w13.jpg',
          'b-w12.jpg',
          'b-w11.jpg',
          'b-w10.jpg',
          'b-w9.jpg',
          'b-w8.jpg',
          'b-w7.jpg',
          'b-w6.jpg',
          'b-w5.jpg',
          'b-w4.jpg',
          'b-w3.jpg',
          'b-w2.jpg',
          'b-w1.jpg',
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
          'b-w46.jpg',
          'b-w45.jpg',
          'b-w44.JPG',
          'b-w43.jpg',
          'b-w42.jpg',
          'b-w41.jpg',
          'b-w40.jpg',
          'b-w39.jpg',
          'b-w38.jpg',
          'b-w37.jpg',
          'b-w36.jpg',
          'b-w35.jpg',
          'b-w34.jpg',
          'b-w33.jpg',
          'b-w32.jpg',
          'b-w31.jpg',
          'b-w30.jpg',
          'b-w29.jpg',
          'b-w28.jpg',
          'b-w27.jpg',
          'b-w26.jpg',
          'b-w25.jpg',
          'b-w24.jpg',
          'b-w23.jpg'
    ];

    display.innerHTML = `
      <div class="photo-grid-scroll">
        <div class="photo-grid">
          ${images.map(src => `
            <div class="photo-tile">
              <img src="images/b-w/${src}" alt="${src}" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  else if (section === 'portal') {
    const images = [
      'sofia-b.jpg',
      'beautiful-all-of-them.jpg',
      'hm.png',
      'bow-art.png',
      'girl-with-gun.png',
      'muy-rockera.png',
      'Sofia-xx.png',
      'i-will-treasure-you..png',        // <-- keep double dot if that's the filename
      'lady-mujer.png',
      "maybe-now-you'll-get-it.png",     // <-- preserve apostrophe
      'muy-muy-rockera.png',
      'i-live-life-in-color.png',
      'open-her-up.jpg',
      'well-it-is.png',
      'on-a-pink-bed.png',
      'skull-man.png',
      'take-my-heart-but-not-my-art.png',
      'well-itsmy-art.png'
    ];

    //inject images
    window.portalImages = images; // Expose it globally

display.innerHTML = `
  <div class="portal-gallery">
    <div class="internet-preview" onclick="openPortalGallery(window.portalImages)">
      <img src="images/sketchbook/portal.png" alt="Preview Image">
      <p class="preview-label">click to enter sketchbook</p>
    </div>
  </div>
`;
  }
}

// OPEN MODAL GALLERY
function openPortalGallery(images) {
  const container = document.getElementById('modal-image-container');
  container.innerHTML = images.map(src => `
    <img src="images/sketchbook/${src}" alt="${src}" class="modal-image-container">
  `).join('');

  document.getElementById('gallery-modal').classList.remove('hidden');
}

// CLOSE MODAL
function closeImage() {
  document.getElementById('gallery-modal').classList.add('hidden');
  document.getElementById('modal-image-container').innerHTML = '';
}

// Expose to global scope
window.loadGallerySection = loadGallerySection;
window.openPortalGallery = openPortalGallery;
window.closeImage = closeImage;