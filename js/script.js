// Welcome name
const name = prompt("Masukkan nama kamu:");
document.getElementById("username").textContent = name || "Name";

// Form validation & result
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("messageText").value;

  if (!name || !birth || !gender || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <strong>Current Time:</strong> ${new Date()}<br><br>
    <strong>Name:</strong> ${name}<br>
    <strong>Date of Birth:</strong> ${birth}<br>
    <strong>Gender:</strong> ${gender}<br>
    <strong>Message:</strong> ${message}
  `;
});

let currentSlide = 0;
const totalSlides = 3;
setInterval(nextSlide, 5000);

function updateSlide() {
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// ===== Swipe Support (Mobile) =====
let startX = 0;

const sliderArea = document.getElementById("slider");

sliderArea.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

sliderArea.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0", "opacity-0");
    menu.classList.add("max-h-96", "opacity-100");
    icon.classList.add("rotate-90");
  } else {
    menu.classList.add("max-h-0", "opacity-0");
    menu.classList.remove("max-h-96", "opacity-100");
    icon.classList.remove("rotate-90");
  }
}

function toggleCatalog(id) {
  const details = ['detail1','detail2','detail3'];

  details.forEach(d => {
  if (d !== id) {
  document.getElementById(d).classList.add('hidden');
}
});

  document.getElementById(id).classList.toggle('hidden');
}
