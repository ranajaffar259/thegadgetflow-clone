const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',  // Automatically adjust based on slide widths
    loop: false,
    spaceBetween: 5,
});

// Toggle dropdown menu on button click
$("#navbar-bottom .nav-menu-bottom .toggle-dropdown-menu").click(function (event) {
    $(".category-dropdown-menu").fadeToggle();
    event.stopPropagation(); // Prevent event from propagating to document
});

// Hide dropdown menu when clicking anywhere outside of it
$(document).click(function (event) {
    if (!$(event.target).closest('.nav-menu-bottom').length) {
        $(".category-dropdown-menu").fadeOut();
    }
});

// Prevent dropdown menu from hiding when clicking inside it
$(".category-dropdown-menu").click(function (event) {
    event.stopPropagation(); // Prevent event from propagating to document
});


// Toggle more menu on button click
$("header #navbar-top #toggleMoreMenu").click(function (event) {
    $("#moreMenu").fadeToggle();
    event.stopPropagation(); // Prevent event from propagating to document
});

// Hide more menu when clicking anywhere outside of it
$(document).click(function (event) {
    if (!$(event.target).closest('.nav-menu-bottom').length) {
        $("#moreMenu").fadeOut();
    }
});

// Prevent more menu from hiding when clicking inside it
$("#moreMenu").click(function (event) {
    event.stopPropagation(); // Prevent event from propagating to document
});


// mobile menu 

$("#toggleMobileMenu").click(function () {
    $("#mobileMenu").slideToggle(200);
    $(this).find("i").toggleClass("fa-close fa-bars");
})

$("#mobileMenu .mobile-nav-menu .mobile-nav-menu-heading").click(function () {
    $(this).parent().find(".mobile-sub-menu").toggle(200);
    $(this).find("i").toggleClass("fa-caret-up fa-caret-down");
})