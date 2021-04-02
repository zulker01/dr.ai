function randomStringDisplay( input) {
    var str = ["Serum Ige ", " CBC ", " Chest CT ", "USG whole abdomen ", "GeneXpert for TB ", "MRI whole skull ", "Endoscopy ", "Urine culture ", "ICT for TB "];
    var items = document.querySelectorAll("#tests li");
    var tab = [];
    var ind;

    // add values to the array
    for (var i = 0; i < items.length; i++) {

        items[i].innerHTML = str[i];

        tab.push(items[i].innerHTML);
    }

    // get selected element index
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function() {

            ind = tab.indexOf(this.innerHTML);
            console.log(this.innerHTML + " Index = " + ind);
            var x = items[ind].innerHTML;
            myfunction(x);

        };
    }

}

function myfunction(x) {
    var newStr = x + " is selected";
    document.querySelector('#dx').value += "\n" + newStr;
    document.querySelector('#rx').value += "\n" + newStr;
    document.querySelector('#cc').value += "\n" + newStr;
    document.querySelector('#ix').value += "\n" + newStr;
}




var inputRx = document.querySelector('#rx');
inputRx.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var x = inputRx.value;
        console.log(x);
        randomStringDisplay(x);
        e.preventDefault();
    }
});

var inputDx = document.querySelector('#dx');
inputDx.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var x = inputDx.value;
        console.log(x);
        randomStringDisplay(x);
        e.preventDefault();
    }
});

var inputCc = document.querySelector('#cc');
inputCc.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var x = inputCc.value;
        console.log(x);
        randomStringDisplay(x);
        e.preventDefault();
    }
});

var inputIx = document.querySelector('#ix');
inputIx.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var x = inputIx.value;
        console.log(x);
        randomStringDisplay(x);
        e.preventDefault();
    }
});