function randomStringDisplay() {
    //var str = ["A", "B", "C", "D", "E"];
    //var suggestions = document.getElementById("tests");
   // suggestions.value = str.join("\n");
}
var str = ["Serum Ige ", " CBC ", " Chest CT ", "USG whole abdomen ", "GeneXpert for TB ","MRI whole skull ","Endoscopy ","Urine culture ","ICT for TB "];
var prevStr="lalalal"
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
        document.getElementById("suggest6").innerHTML = str[5];
        document.getElementById("suggest7").innerHTML = str[6];
        document.getElementById("suggest8").innerHTML = str[7];
        document.getElementById("suggest9").innerHTML = str[8];
        
        e.preventDefault();
    }
});

function fun1(){
    var newStr = prevStr.concat(str[0]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}

function fun2(){
    var newStr = prevStr.concat(str[1]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}

function fun3(){
    var newStr = prevStr.concat(str[2]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}

function fun4(){
    var newStr = prevStr.concat(str[3]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}

function fun5(){
    var newStr = prevStr.concat(str[4]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}



function fun6(){
    var newStr = prevStr.concat(str[5]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}

function fun7(){
    var newStr = prevStr.concat(str[6]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}
function fun8(){
    var newStr = prevStr.concat(str[7]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}
function fun9(){
    var newStr = prevStr.concat(str[8]);
    prevStr = newStr;
    document.getElementById("dx").innerHTML = newStr.concat(" is selected");
    document.getElementById("cc").innerHTML = newStr.concat(" is selected");
    document.getElementById("rx").innerHTML = newStr.concat(" is selected");
    document.getElementById("ix").innerHTML = newStr.concat(" is selected");
}