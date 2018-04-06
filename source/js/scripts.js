'use strict';

(function() {
  var cardsProduct = document.querySelectorAll('.product');
  var linksProduct = document.querySelectorAll('.product__com-link');
  var soldProduct = document.querySelector('.product__disabled');

  for (var i = 0; i < cardsProduct.length; i++) {
    cardsProduct[i].addEventListener('click', productHandler);
    linksProduct[i].addEventListener('click', productHandler);
  }

  function productHandler (evt) {
    var KEY_CODE = {
      TAB: 9,
      ENTER: 13
    };

    if(!soldProduct) {
      evt.preventDefault();
      if (evt.keyCode === KEY_CODE.TAB) return;
      if (evt.type === 'click' || evt.keyCode === KEY_CODE.ENTER) {
        if (evt.target === 'a.product-com__link') {
          evt.target.parentNode.classList.toggle('product--selected');
        }
      this.classList.toggle('product--selected');
      }
    }
  }
})();
