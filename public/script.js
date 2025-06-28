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

// LOAD GALLERY
function loadGallerySection(section) {
  const display = document.getElementById("gallery-display");

  if (section === 'photography') {
    const images = [
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
          'b-w23.jpg',
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
          'b-w1.jpg'
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
    display.innerHTML = `
  <div class="portal-gallery">
    <div class="internet-preview">
      <img src="images/sketchbook/bow-art.png" alt="bow-art.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/girl-with-gun.png" alt="girl-with-gun.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/hm.png" alt="hm.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/i-live-life-in-color.png" alt="i-live-life-in-color.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/i-will-treasure-you.png" alt="i-will-treasure-you.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/lady-mujer.png" alt="lady-mujer.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/maybe-now-youll-get-it.png" alt="maybe-now-youll-get-it.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/muy-muy-rockera.png" alt="muy-muy-rockera.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/muy-rockera.png" alt="muy-rockera.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/on-a-pink-bed.png" alt="on-a-pink-bed.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/portal.png" alt="portal.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/skull-man.png" alt="skull-man.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/Sofia-xx.png" alt="Sofia-xx.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/take-my-heart-but-not-my-art.png" alt="take-my-heart-but-not-my-art.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/well-it-is.png" alt="well-it-is.png">
    </div>
    <div class="internet-preview">
      <img src="images/sketchbook/well-itsmy-art.png" alt="well-itsmy-art.png">
    </div>
  </div>
`;

  }
}

// OPEN MODAL GALLERY
function openPortalGallery(images) {
  const container = document.getElementById('modal-image-container');
  container.innerHTML = images.map(src => `
    <img src="images/sketchbook/${src}" alt="${src}" class="modal-image-item">
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