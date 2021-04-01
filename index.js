function randomStringDisplay() {
    var str = ["A", "B", "C", "D", "E"];
    var suggestions = document.getElementById("tests");
    suggestions.value = str.join("\n");
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