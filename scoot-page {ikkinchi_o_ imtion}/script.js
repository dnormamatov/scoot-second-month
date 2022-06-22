let height = $(".header").css("height");

$(window).resize(function () {
    height = $(".header").css("height");
})

$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $(".header").addClass("sticky");
        $("body").css("margin-top", height);
    }
    else {
        $(".header").removeClass("sticky");
        $("body").css("margin-top", 0);
    }
})

//mobile menu
$(".header__nav-toggle").on("click", function () {
    $(".header__navigation").toggleClass("open");
    $("body").toggleClass("no-scroll");

    const menuOpen = $(".header__navigation").hasClass("open");

    if (menuOpen) {
        $(this).prop("src", "images/icons/close.svg");
    }
    else {
        $(this).prop("src", "images/icons/hamburger.svg");
    }
})

$(".header__btn").on("click", function () {
    $(".header__navigation").removeClass("open");
    $("body").removeClass("no-scroll");
    $(".header__nav-toggle").prop("src", "images/icons/hamburger.svg");
})

//mobile menu

if ($(window).width() <= 700) {
    animateMenuItems();
}

$(window).resize(function () {
    if ($(window).width() <= 700) {
        animateMenuItems();
    }
})

function animateMenuItems() {
    let delay = 0.2;

    $(".menu-link").each(function () {
        $(this).css("animation", "slideLeft 0.4s " + delay + "s");
        $(this).css("animation-fill-mode", "backwards");
        delay = delay + 0.2;
    })

    $(".header__btn").css("animation", "slideLeft 0.4s " + delay + "s");
    $(".header__btn").css("animation-fill-mode", "backwards");
}


