document.querySelector('.btn-menu').addEventListener(
  'click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
  }
);

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.noti-tar',{delay:500});
ScrollReveal().reveal('.tar-banner-uno',{delay:500});
ScrollReveal().reveal('.tar-banner-dos',{delay:500});
