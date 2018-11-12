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
