function findTotal() {
    var arr = document.getElementsByName("qty");
    var tot = 0;

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value)) {
            tot += parseInt(arr[i].value);
        }
    }

    document.getElementById("total").innerHTML = tot;
}


var btns = document.getElementsByTagName("button");

for (let i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.addEventListener("click", function () {

        var parent = this.parentElement;
        var price = parent.firstChild.nextSibling.textContent;
        price = price.match(/\d+/g).map(Number);
        var input = parseInt(parent.childNodes[3].firstChild.nextSibling.value);
        var sum = price * input;

        document.getElementById('total-price').innerHTML = sum;
        

    });
}

==================================================================================================
var sum = {};

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

// var prodList = document.getElementById('prod-list');
// var products = document.getElementsByClassName('product-box__item');
 
// var j = 0;
// for (let i = 0; i < products.length; i++) {
//     var product = products[i];
//     j = j + 1;

//     product.id = 'prod' + j;

// }

// prodList.addEventListener('click', function (event) {

//     var elem = event.target.id || event.target.parentNode.id || event.target.parentNode.parentNode.id || event.target.parentNode.parentNode.parentNode.id;

//     var productItem = getElementById(elem);

//     var value = productItem.querySelector('input.qty__item');
//     console.log(value); 
// });
var btns = document.getElementsByTagName("button"); 

for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];

    btn.addEventListener("click", function () {

        var parent = this.parentElement;
        var price = parent.firstChild.nextSibling.textContent;
        price = price.match(/\d+/g).map(Number);
        var input = parseInt(parent.childNodes[3].firstChild.nextSibling.value);
        var sumProduct = price * input;
        var prodID =7;
        sum[prodID] = sumProduct;
        
        console.log(sum);
        // document.getElementById('total-price').innerHTML = sumProduct;

    });
}
