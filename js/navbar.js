const navbarToggler = document.getElementById('navbar-toggler'),
      navbar = document.getElementsByTagName('nav').item(0),
      body = document.getElementsByTagName('body').item(0);

navbarToggler.addEventListener('click', () => {
    toggle();
});

for (let i = 0; i < navbar.children.length; i++) {
    navbar.children[i].addEventListener('click', () => {
        toggle();
    })
}

function toggle() {
    navbarToggler.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('fix');
}