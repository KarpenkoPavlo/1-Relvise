let headerFixed = document.querySelector(".header");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerFixed.style.backgroundColor = "rgb(1%, 1%, 1%, 0.2)";
    } else {
        headerFixed.style.backgroundColor = "rgb(1%, 1%, 1%, 0)";
    }
}