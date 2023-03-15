//If - else
let response = prompt ("1 + 1 = ");
if (response == 2) {
    alert("Correct!");
} else {
    alert("Wrong!");
}

// else if
let response2 = prompt ("2 + 1 = ");
if (response2 == 3) {
    alert("Correct!");
} else if(response2 < 2){
    alert("Too low!");
} else{
    alert("Too High!");
}

//Switch
let color = "red";

switch (color) {
    case "red":
        alert("I Love Red!");
        break;
    case "blue":
        alert("I Love Blue!");
        break;
    default:
        alert("I don't know what color it is!");
        break;
}