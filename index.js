function randomStringDisplay() {
    var str = ["A", "B", "C", "D", "E"];
    var suggestions = document.getElementsById("tests");
    suggestions.value = str.join("\n");
}