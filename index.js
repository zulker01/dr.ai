function randomStringDisplay() {
    //var str = ["A", "B", "C", "D", "E"];
    //var suggestions = document.getElementById("tests");
   // suggestions.value = str.join("\n");
}
var str = ["Serum Ige", " CBC", " Chest CT ", "USG whole abdomen", "GeneXpert for TB"];
var input = document.querySelector('#rx');
input.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var x = input.value;
        console.log(x);
       // randomStringDisplay();
        document.getElementById("suggest1").innerHTML = str[0];
        document.getElementById("suggest2").innerHTML = str[1];
        document.getElementById("suggest3").innerHTML = str[2];
        document.getElementById("suggest4").innerHTML = str[3];
        document.getElementById("suggest5").innerHTML = str[4];
        document.getElementById("suggest6").innerHTML = str[0];
        document.getElementById("suggest7").innerHTML = str[1];
        document.getElementById("suggest8").innerHTML = str[2];
        document.getElementById("suggest9").innerHTML = str[3];
        
        e.preventDefault();
    }
});

function fun1(){
    document.getElementById("dx").innerHTML = str[0].concat(" is selected");
    document.getElementById("cc").innerHTML = str[0].concat(" is selected");
    document.getElementById("rx").innerHTML = str[0].concat(" is selected");
    document.getElementById("ix").innerHTML = str[0].concat(" is selected");
}

function fun2(){
    document.getElementById("dx").innerHTML = str[1].concat(" is selected");
    document.getElementById("cc").innerHTML = str[1].concat(" is selected");
    document.getElementById("rx").innerHTML = str[1].concat(" is selected");
    document.getElementById("ix").innerHTML = str[1].concat(" is selected");
}

function fun3(){
    document.getElementById("dx").innerHTML = str[2].concat(" is selected");
    document.getElementById("cc").innerHTML = str[2].concat(" is selected");
    document.getElementById("rx").innerHTML = str[2].concat(" is selected");
    document.getElementById("ix").innerHTML = str[2].concat(" is selected");
}

function fun4(){
    document.getElementById("dx").innerHTML = str[3].concat(" is selected");
    document.getElementById("cc").innerHTML = str[3].concat(" is selected");
    document.getElementById("rx").innerHTML = str[3].concat(" is selected");
    document.getElementById("ix").innerHTML = str[3].concat(" is selected");
}

function fun5(){
    document.getElementById("dx").innerHTML = str[4].concat(" is selected");
    document.getElementById("cc").innerHTML = str[4].concat(" is selected");
    document.getElementById("rx").innerHTML = str[4].concat(" is selected");
    document.getElementById("ix").innerHTML = str[4].concat(" is selected");
}

function fun5(){
    document.getElementById("dx").innerHTML = str[0].concat(" is selected");
    document.getElementById("cc").innerHTML = str[0].concat(" is selected");
    document.getElementById("rx").innerHTML = str[0].concat(" is selected");
    document.getElementById("ix").innerHTML = str[0].concat(" is selected");
}

function fun6(){
    
    document.getElementById("dx").innerHTML = str[1].concat(" is selected");
    document.getElementById("cc").innerHTML = str[1].concat(" is selected");
    document.getElementById("rx").innerHTML = str[1].concat(" is selected");
    document.getElementById("ix").innerHTML = str[1].concat(" is selected");
}

function fun7(){
    document.getElementById("dx").innerHTML = str[2].concat(" is selected");
    document.getElementById("cc").innerHTML = str[2].concat(" is selected");
    document.getElementById("rx").innerHTML = str[2].concat(" is selected");
    document.getElementById("ix").innerHTML = str[2].concat(" is selected");
}