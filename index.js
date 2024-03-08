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
