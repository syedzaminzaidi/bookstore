// show-cart
(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

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
})();
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
    showTotals()
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



//search items 
const sItems = [
  { id: 0, name: "religion item", img: "img/religion1.jpg", price: 5 },
  { id: 1, name: "religion item", img: "img/religion2.jpg", price: 5 },
  { id: 2, name: "religion item", img: "img/religion3.jpg", price: 5 },
  { id: 2, name: "history item", img: "img/history1.jpg", price: 10 },
  { id: 2, name: "history item", img: "img/history2.jpg", price: 10 },
  { id: 2, name: "history item", img: "img/history3.jpg", price: 10 },
];
// (function search() {
//   const searchItems = document.getElementById("search-store-items");
//   searchItems.addEventListener("submit", function (event) {
//     event.preventDefault();


//     if (itemFound != "") {
//       const resultSearch = document.getElementById("search-item");
//       resultSearch.innerHTML = sItems.map(item =>
//         `<div class="card single-item">
//             <div class="img-container">
//               <img src=${item.img} class="card-img-top store-img" alt="">
//               <span class="store-item-icon">
//                 <i class="fas fa-shopping-cart"></i>
//               </span>
//             </div>
//             <div class="card-body">
//               <div class="card-text d-flex justify-content-between text-capitalize">
//                 <h5 id="store-item-name">${item.name}</h5>
//                 <h5 class="store-item-value">$<strong id="store-item-pice" class="font-weight-bold">${item.price}</strong></h5>
//               </div>
//             </div>
//           </div>`)
//     }
//   })
// })
function fun() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-item");
  filter = input.value.toUpperCase();
  ul = document.getElementById("store-items");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}
//search item