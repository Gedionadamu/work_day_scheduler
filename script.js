var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do"));

var hour = moment().hour(); // Number




var saveButton = $(".saveBtn")


saveButton.on('click',saveUserInput);

timeManager();
// renderUserInput();
var todo = [];

function saveUserInput(){
    renderUserInput();
    var userInput = $(this).siblings('.description').val();
    var time = $(this).attr("id");
    var description = { userInput,time};
    todo.push(description);
    localStorage.setItem("description", JSON.stringify(todo));
    
};
function renderUserInput(){
    // var lastInput = JSON.parse(localStorage.getItem("description"));
    // var time = lastInput.time;
    // var dis = lastInput.userInput;
    // if(time === $(".description").prop("id")){
    //     $(this).text= dis;
    // console.log(time)
    // console.log(dis)   

    }
    


 function timeManager(){
    var des = $(".description")
    var scheduleTime = $(".description").prop("id");
    
    for(i=0; i<hour;i)
        if(hour == scheduleTime){
            des.attr("class","present col-10")
        } else if ( hour > scheduleTime){
            des.attr("class", "future col-10")
        } else{
            des.attr("class","past col-10")
        }

 }
// // function saveUserInput(){
// //     var userInput = $(this).siblings('.description').val();
// //     var time = $(this).attr("id");
// //     var descritpion = { userInput,time};
// //     localStorage.setItem("description", userInput);
// //     localStorage.setItem("time",time);
// //     renderUserInput();
// // };
// // function renderUserInput(){
// //     var lastInput = localStorage.getItem("description");
// //     var lasttime = localStorage.getItem("time");
// //     // if (lastInput !== null) {
// //     //     userInput

// //     // }
// //     console.log(lasttime);
// //     console.log(lastInput);
// // }