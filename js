// Storage
var storage = [];

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

//add unique ID to product items
var items = document.getElementsByClassName('product-box__item');
var j = 0;
for (let i = 0; i < items.length; i++) {

    var item = items[i];
    j += 1;
    item.id = 'prod' + j;

}

var btns = document.getElementsByTagName("button");
var price = 0;
for (let i = 0; i < btns.length; i++) {

    var btn = btns[i];
    
    btn.onclick = function () {
        var local_storage = {};
        var parent = this.parentElement;
        var product = parent.parentElement.id;
        var prodPrice = parseInt(parent.firstChild.nextSibling.textContent);
        var input = parseInt(parent.childNodes[3].firstChild.nextSibling.value);
        var sum = prodPrice * input;

        local_storage.name = product;
        local_storage.price = sum;

        if (local_storage.name === local_storage.name) {
            console.log(true);
            
        }
      console.log(local_storage.name);
      
        storage.push(local_storage);
    //    for (let i = 0; i < storage.length; i++) {
    //        const element = storage[i];
           
    //        console.log(element.name);
    //    }




        // document.getElementById('total-price').innerHTML = ???

    };
}
