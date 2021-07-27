const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelector(".nav-link");
const navHeight = nav.getBoundingClientRect().height;
const burger = document.querySelector(".burger");
console.log(navHeight);
const header = document.querySelector(".header");
const lucy = document.querySelector(".lucy");
const steven = document.querySelector(".steven");
const brian = document.querySelector(".brian");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");

// Functions
const fadeLinks = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");
    const title = link.closest(".nav").querySelector(".title");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    title.style.opacity = this;
  }
};

const smoothScroll = function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

const addColorBtn = function (e) {
  if (e.target.classList.contains("btn")) {
    const btn = e.target;
    btn.classList.add("change-color");
  }
};

const removeColorBtn = function (e) {
  if (e.target.classList.contains("btn")) {
    const btn = e.target;
    btn.classList.remove("change-color");
  }
};

let img;

const changeImage = function () {
  const imgSiblings = img.closest(".brian").querySelectorAll(".img");
  imgSiblings.forEach((el) => {
    if (el !== img) {
      el.classList.add("hidden");
    }
  });
  img.classList.remove("hidden");
  img.classList.add("active");
};

const stickyNav = function (entries) {
  [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Event handlers
nav.addEventListener("mouseover", fadeLinks.bind("0.5"));
nav.addEventListener("mouseout", fadeLinks.bind("1"));

navLinks.addEventListener("click", smoothScroll);

brian.addEventListener("mouseover", addColorBtn);
brian.addEventListener("mouseout", removeColorBtn);

btn1.addEventListener("click", function () {
  img = img1;
  changeImage();
});
btn2.addEventListener("click", function () {
  img = img2;
  changeImage();
});
btn3.addEventListener("click", function () {
  img = img3;
  changeImage();
});
btn4.addEventListener("click", function () {
  img = img4;
  changeImage();
});
btn5.addEventListener("click", function () {
  img = img5;
  changeImage();
});
