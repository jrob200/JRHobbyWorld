let prodImg = document.querySelector('.product_image');
let addToCartButton = document.querySelector('.button');

prodImg.onmouseover = event => {
    event.target.style.opacity = '0.5';
};

prodImg.onmouseout = event => {
    event.target.style.opacity = '';
};

addToCartButton.onclick = event => {
    event.target.innerHTML = 'Added!'
};

addToCartButton.onmouseout = event => {
    event.target.innerHTML = 'Add to Cart';
};