/* functions to open and close mobile overlay menu */
function openMenu(){
    document.getElementsByClassName("overlay-menu")[0].style.display = "block";
    document.body.classList.add("darken");
}
function closeMenu(){
    document.getElementsByClassName("overlay-menu")[0].style.display = "none";
    document.body.classList.remove("darken");
}

/* photo slider functions and variables*/
let slideIndex = 1;
function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
function changeSlide(n) {
    showSlide(slideIndex += n);
}

/* function to change the add to cart counter */
let addToCartCounter = 0;
function changeAddToCartCounter(n) {
    if (addToCartCounter != 0 || n > 0){
        addToCartCounter += n;
    }
    document.getElementById("add-to-cart-count").innerText = addToCartCounter;
}

/* functions to execute after page load */
window.addEventListener('load', function () {
    /* set original photo on slider */
    showSlide(slideIndex);

    /* set original cart count to 0 */
    changeAddToCartCounter(0);
});