function hello() {
    alert("hi I am Pa Nhia")
}

window.onscroll = barSticky()
const navbar = document.getElementById("navbar")

const sticky = navbar.offsetTop;

function barSticky() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }else {
        navbar.classList.remove("sticky")
    }
}