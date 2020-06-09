// show-cart
(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

//search item

//add items to the cart

(function () {
  const cartBtn = document.querySelectorAll('.store-item-icon');
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      //console.log(event.target);
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart${partPath}`;

        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;
        let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim(1);
        item.price = finalPrice;
        //console.log(name);
        //console.log(finalPrice);
        //console.log(item);

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item", "d-flex", "justify-content-between", "text-capitalize", "my-3");
        cartItem.innerHTML =
          `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
            </div>
            <a href="#" id="cart-item-remove" onClick="removeFromCart(this)" class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
        //select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');
        cart.insertBefore(cartItem, total);
        showTotals();
      }

    });
  });
  // show totals
  function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");
    //debugger
    items.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });
    //console.log(total);
    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);
    document.getElementById("cart-total").textContent = finalMoney;
    document.querySelector(".item-total").textContent = finalMoney;
    document.getElementById("item-count").textContent = total.length;
  }

})();
function getTotal() {
  const total = [];
  const items = document.querySelectorAll(".cart-item-price");
  //debugger
  items.forEach(function (item) {
    total.push(parseFloat(item.textContent));
  });
  //console.log(total);
  const totalMoney = total.reduce(function (total, item) {
    total += item;
    return total;

  }, 0);
  return totalMoney;

}
function check() {
  alert("Order...\n Amount: " + getTotal());

  const clearCartButton = document.getElementById("check");
  clearCartButton.addEventListener("click", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(function (element) {
      element.remove();
    });
    showTotals();
  });

}

// delete items in cart
/*var deleteItem = document.getElementsByClassName('cart-item-remove')
//console.log(deleteItem)
for (var i = 0; i < deleteItem.length; i++) {
  var dlt = deleteItem[i]
  dlt.addEventListener('click', function (event) {
    var btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    //updateCartTotal()
  })
}*/


/*function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart')
  var cartRows = cartItemContainer.getElementsByClassName('cart-item')
  var total1 = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-item-price')
    var price = parseFloat(priceElement.innerText)
    total1 = total1 + (price)
  }
  document.getElementsByClassName('cart-total').innerText = total1
}*/
(function () {
  const clearCartButton = document.getElementById("clear-cart");
  clearCartButton.addEventListener("click", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(function (element) {
      element.remove();
    });
    showTotals();
  });
})();

function removeFromCart(element) {
  const elementParent = element.parentElement;
  elementParent.remove();
  showTotals();
}
(function () {
  const searchItemForm = document.getElementById('search-store-item');

  searchItemForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchFieldValue = document.getElementById('search-item').value;
    alert("hello");
  });
});