/* functions to open and close mobile overlay menu */
function openMenu(){
    document.getElementsByClassName("overlay-menu")[0].style.display = "block";
    document.body.classList.add("darken");
}
function closeMenu(){
    document.getElementsByClassName("overlay-menu")[0].style.display = "none";
    document.body.classList.remove("darken");
}
/* function to toggle the cart summary overlay */
function toggleCartSummary() {
    const cartSummary = document.getElementsByClassName("cart-summary")[0];
    if (cartSummary.style.display == 'block'){
        cartSummary.style.display = 'none';
    }else {
        cartSummary.style.display = 'block';
    }
}

/* photo slider functions and variables updates both the main page and lightbox overlay*/
let slideIndex = 1;
function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const lightboxSlides = document.getElementsByClassName("lightbox-slide")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length} ;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        lightboxSlides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    lightboxSlides[slideIndex-1].style.display = "block";
}

/* handler function for the desktop and lightbox thumbnail images */
function thumbnailHandler(n) {
    showSlide(slideIndex = n);
    const thumbnails = document.getElementsByClassName("thumbnail");
    const lightboxThumbnails = document.getElementsByClassName("lightbox-thumbnail");
    for (let i=0; i < thumbnails.length; i++) {
        if (i == slideIndex - 1) {
            thumbnails[i].classList.add("active-thumbnail");
            lightboxThumbnails[i].classList.add("active-thumbnail", "lighten");
        }else{
            thumbnails[i].classList.remove("active-thumbnail");
            lightboxThumbnails[i].classList.remove("active-thumbnail", "lighten");
        }
    }
}
function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
    thumbnailHandler(slideIndex);
}

/* functions to open and close lightbox overlay */
function openLightbox() {
    var x = window.matchMedia("(min-width: 768px)");
    if (x.matches){
        document.getElementsByClassName('lightbox')[0].style.display = "block";
        document.body.classList.add("darken");
    }
    
}
function closeLightbox() {
    document.getElementsByClassName('lightbox')[0].style.display = "none";
    document.body.classList.remove("darken");
}


/* function to change the add to cart counter */
let addToCartCounter = 0;
function changeAddToCartCounter(n) {
    if (addToCartCounter != 0 || n > 0){
        addToCartCounter += n;
    }
    document.getElementById("add-to-cart-count").innerText = addToCartCounter;
}

/* function and variable to update the number of items in the cart*/
/*TO update the cart counter we update empty cart message, we update */ 
let cartCounter = 0;
function updateCartCounter(n){
    cartCounter += n;
    const emptyMessage = document.getElementById("cart-empty-message");
    const cartFilled = document.getElementById("cart-filled");
    const cartFilledNotification = document.getElementById("cart-filled-notification")
    const counters = document.getElementsByClassName("cart-count");
    const cartTotal = document.getElementById("cart-total");
    if (cartCounter > 0){
        emptyMessage.style.display = "none";
        cartFilled.style.display = "block";
        cartFilledNotification.style.display = "block";
        for (let counter of counters) {
            counter.textContent = `${cartCounter}`;
        };
        cartTotal.textContent = `$${(Number(cartCounter)*125).toFixed(2)}`;
    }else {
        emptyMessage.style.display = "block";
        cartFilled.style.display = "none";
        cartFilledNotification.style.display = "none";
    }
}

/* handler for the add to cart button */
function addToCartHandler() {
    const addToCartCount = document.getElementById("add-to-cart-count");
    updateCartCounter(Number(addToCartCount.textContent));
    addToCartCount.textContent = 0;
    addToCartCounter = 0;
}

/* functions to execute after page load */
window.addEventListener('load', function () {
    /* set original photo on slider */
    showSlide(slideIndex);

    /* set original add to cart count to 0 */
    changeAddToCartCounter(0);
});