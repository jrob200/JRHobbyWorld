let prodImg = document.querySelector('.product_image');

prodImg.onmouseover = event => {
    event.target.style.opacity = '0.5';
};

prodImg.onmouseout = event => {
    event.target.style.opacity = '';
};