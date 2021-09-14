document.addEventListener('DOMContentLoaded', () => {
	hljs.highlightAll();
	
  const burgerBtn = document.querySelector('.header__btn');
  const nav = document.querySelector('.header__nav');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      burgerBtn.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('lock');
    }
  });
});
