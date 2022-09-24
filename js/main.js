

var navbar = document.querySelector('.navbar');
var menu = document.querySelector('.fa-bars')
var close = document.querySelector('.fa-xmark')
var click = document.querySelectorAll('a')



click.forEach(element => {
    element.onclick = function () {
        navbar.style.transform = 'translateX(-100%)';
    }
});

menu.onclick = function () {
    navbar.style.transform = 'translateX(0%)';
}

menu.ondblclick = function () {
    navbar.style.transform = 'translateX(-100%)';

}

close.onclick = function () {
    navbar.style.transform = 'translateX(-100%)';
}


var upbtn = document.querySelector('.fa-angles-up');
var header = document.querySelector('header');

window.onscroll = function () {

    if (window.scrollY >=600) {
        upbtn.style.display = 'block';
    } else if (window.scrollY == 0) {
        upbtn.style.display = 'none';
        header.style.boxShadow = null;


    } else if (window.scrollY >= 200) {
          header.style.boxShadow = "3px 10px 16px 0px rgba(0, 0, 0, 0.75)";
        header.style.webkitBoxShadow = "3px 10px 16px 0px rgba(0, 0, 0, 0.75)";
                        header.style.mozBoxShadow = "3px 10px 16px 0px rgba(0, 0, 0, 0.75)";
    }
}
upbtn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
}

var downbtn = document.querySelector('.fa-angles-down');


downbtn.onclick = function () {

    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior:'smooth'
    })
}