const originalClass = [".one", ".two", ".three", ".experience"];
// to observe p.title
const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-about-span");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
// console.log(1);
originalClass.forEach((className) => {
  // console.log(2);
  titleObserver.observe(document.querySelector(className));
});
// console.log(3);

// to observe p.text
const contentObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-about-content");
      }
    });
  },
  {
    threshold: 0.3,
  }
);
contentObserver.observe(document.querySelector(".about-content"));

// to observe about-top-right
const aboutTopRightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-about-top-right");
      }
    });
  },
  {
    threshold: 1,
  }
);
aboutTopRightObserver.observe(document.querySelector(".about-top-right"));

// Pricing section animation on-scroll
const pricingElements = [".title", ".card-deck"];

const pricingElementObserver = new IntersectionObserver(
  (entries) => {
    // debug
    console.log("hi");

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

pricingElements.forEach((element) => {
  pricingElementObserver.observe(document.querySelector(element));
});

//Pricing ::before animation
const pricingBeforeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-pricing-before");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

pricingBeforeObserver.observe(document.querySelector(".pricing::before"));
