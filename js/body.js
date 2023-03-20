

// READ MORE AND SHOW LESS FUNCTIONALITIES STARTS HERE _________
let moreText = document.querySelector(".more-txt")
let showNone = document.querySelector(".show-less")
let readMore = document.querySelector(".read-more")

document.querySelector(".read-more").onclick = () => {
    moreText.classList.add("show")
    showNone.classList.add("show")
    readMore.classList.add("hidden")
}

document.querySelector(".show-less").onclick = () => {
    moreText.classList.remove("show")
    showNone.classList.remove("show")
    readMore.classList.remove("hidden")
}

// READ MORE AND SHOW LESS FUNCTIONALITIES ENDS HERE _________

// CARROUSEL STARTS HERE_______________________________________

const carousel = document.querySelector(".carousel");
const container = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let interval;

function startSlide() {
  interval = setInterval(() => {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }, 3000);
}

function stopSlide() {
  clearInterval(interval);
}

function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex--;
  }
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
  items[currentIndex].classList.add("active");
}

function nextSlide() {
  if (currentIndex === items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
  items[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  stopSlide();
  prevSlide();
});

nextBtn.addEventListener("click", () => {
  stopSlide();
  nextSlide();
});

carousel.addEventListener("mouseover", stopSlide);
carousel.addEventListener("mouseout", startSlide);

startSlide();
