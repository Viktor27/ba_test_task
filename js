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
var btns = document.getElementsByTagName("button");
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

//filteer
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

// var selectPrice = document.getElementById("select-price");
// var filteredProducts = document.querySelectorAll('js-show');

// selectPrice.onchange = function(){
// 	selectedValue = this.value;

// 	for (var i = 0; i < filteredProducts.length; i++) {
// 		filteredProduct = filteredProducts[i];
		
// 	}
// }
