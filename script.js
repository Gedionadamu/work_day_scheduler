var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do"));

var userInput = $(".descritpion")
console.log(userInput)

function saveUserInput(){
    var descritpion = { dayEvent : descritpion.value};
    localStorage.setItem("description", JSON.stringify(descritpion));
};
// function renderUserInput(){
//     var lastInput = JSON.parse(localStorage.getItem("descritpion"));
//     if (descritpion !== null) {
//         userInput.

//     }
// }