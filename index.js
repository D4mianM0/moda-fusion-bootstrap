document.addEventListener('DOMContentLoaded', function () {
    var offcanvasNavbar = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));

    // Al hacer clic en el botón del navbar-toggler-icon, mostramos el offcanvas
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        offcanvasNavbar.show();
    });

    // Al hacer clic en el botón Close, ocultamos el offcanvas
    document.querySelector('.btn-close').addEventListener('click', function () {
        offcanvasNavbar.hide();
    });

    // Al hacer clic en un nav-link, esperamos 1 segundo y luego ocultamos el offcanvas
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            setTimeout(function () {
                offcanvasNavbar.hide();
                window.location = link.href;
            }, 100);
        });
    });
});
