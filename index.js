function randomStringDisplay() {
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




var input = document.querySelector('#rx');
input.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var x = input.value;
        console.log(x);
        randomStringDisplay();
        e.preventDefault();
    }
});