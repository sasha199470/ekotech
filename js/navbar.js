const navbarToggler = document.getElementById('navbar-toggler'),
      navbar = document.getElementsByTagName('nav').item(0),
      body = document.getElementsByTagName('body').item(0);

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('fix');
});
