const paragraphs = document.querySelectorAll('.main-expo, .nihon-anime, .japanmap, .sub-title, .sub-menu');

const options = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

paragraphs.forEach(paragraphs => {
  observer.observe(paragraphs);
});
