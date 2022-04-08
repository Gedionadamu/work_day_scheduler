var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do"));

var hour = moment().hour(); // Number




var saveButton = $(".saveBtn")


saveButton.on('click',saveUserInput);



function saveUserInput(){
    var userInput = $(this).siblings('.description').val();
    var time = $(this).attr("id");
    var descritpion = { userInput,time};
    localStorage.setItem("description", JSON.stringify(descritpion));
};
function renderUserInput(){
    var lastInput = JSON.parse(localStorage.getItem("descritpion"));
    
    // if (lastInput !== null) {
    //     userInput

    // }
}
console.log(renderUserInput)