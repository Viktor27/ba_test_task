// Storage
var storage = {};

function findTotal() {
  var arr = document.getElementsByName("qty");
  var tot = 0;

  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      tot += parseInt(arr[i].value);
    }
  }

  document.getElementById("total").innerHTML = tot;
}

//add unique ID to product items
var productItems = document.getElementsByClassName("product-box__item");
var j = 0;
var item;
for (var i = 0; i < productItems.length; i++) {
  item = productItems[i];
  j += 1;
  item.id = "prod" + j;
}
//count && output
var btns = document.getElementsByClassName("product-box__btn");
for (let i = 0; i < btns.length; i++) {
  var btn = btns[i];

  btn.onclick = function() {
    var parent = this.parentElement;
    var product = parent.parentElement.id;
    var prodPrice = parseInt(parent.firstChild.nextSibling.textContent);
    var input = parseInt(parent.childNodes[3].firstChild.nextSibling.value);
    var sum = prodPrice * input;
    storage[product] = sum;

    var totalSum = 0;
    for (var price in storage) {
      if (storage.hasOwnProperty(price)) {
        totalSum += parseInt(storage[price]);
      }
    }

    document.getElementById("total-price").innerHTML = totalSum;
  };
}

//filteer ¯\_(ツ)_/¯ I hope your eyes are not bleeding
var selectCat = document.getElementById("select-cat");

selectCat.onchange = function() {
  selectedValue = this.value;

  for (var i = 0; i < productItems.length; i++) {
    productItem = productItems[i];
    if (selectedValue == productItem.getAttribute("data-cat")) {
      productItem.classList.add("js-show");
      productItem.classList.remove("js-hide");
    } else if (selectedValue == 0) {
      productItem.classList.remove("js-hide");
      productItem.classList.add("js-show");
    } else {
      productItem.classList.add("js-hide");
      productItem.classList.remove("js-show");
    }
  }
};

var selectPrice = document.getElementById("select-price");
var filteredProducts = document.getElementsByClassName("js-show");

selectPrice.onchange = function() {
  selectedValue = this.value;

  for (var i = 0; i < filteredProducts.length; i++) {
    var filteredProduct = filteredProducts[i];
    var filteredProductPrice = parseInt(
      filteredProduct.querySelector(".price").innerHTML
    );
    console.log(filteredProductPrice, "---", selectedValue);
    if (filteredProductPrice < selectedValue) {
      filteredProduct.classList.remove("js-hide");
      filteredProduct.classList.add("js-show");
    } else if (selectedValue == 0) {
      filteredProduct.classList.remove("js-hide");
      filteredProduct.classList.add("js-show");
    } else {
      filteredProduct.classList.add("js-hide");
    }
  }
};
// ¯\_(ツ)_ /¯

//modal window

var orderBtn = document.getElementById("btn-check");
var popup = document.getElementById("popup");

orderBtn.onclick = function() {
  popup.style.display = "block";
};

function validateForm() {
  var orderForm = document.getElementById("order-form");
  if (!orderForm.checkValidity()) {
    alert("There was a problem with your submission");
  } else {
    alert("Thanks for order!!");
  }
}
