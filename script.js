// creates variable and appends time to the top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do"));
 // creates a variable the gives the current hour in the 24hr format
var hour = moment().hour(); // Number




// creates a variable for the the save btn
var saveButton = $(".saveBtn")

//  creates an event listner on the search btn
saveButton.on('click',saveUserInput);
// creates an empty array variable
var todo = [];
// creates a function to save unser input into local storage
function saveUserInput(){
    
    //  creates a loop to save values in every input feild
    for (var i = 0; i<9;i++){
    var userInput = $("#time" + [i]).val();
    var time = $(".time"+ [i]).attr("id");
    var description = { userInput,time};
    // adds items to an empty array
    todo.push(description);
}
    // saves to local storage
    localStorage.setItem("description", JSON.stringify(todo));
    
};

// function renders data from local storage to html
function renderstorage(){
    // creates a variable  and gets items from local storage
    var localsave = JSON.parse(localStorage.getItem("description"));
    // it tells the function to stop if there is nothing in the local storage
    if (localsave == null){
        return
    }
    // loops through each input feild and puts the local storage data in the input values
    for(var i= 0; i < 9; i++){
               
        $("#time"+[i]).val(localsave[i].userInput)
        // loops through the time and shows the correct color for the time of day. 
        if (localsave[i].time < hour){
            $("#time"+[i]).attr("class", "past col-10")
        }
        else if (localsave[i].time == hour){
            $("#time"+[i]).attr("class", "present col-10")
        }
        else {
            $("time"+[i]).attr("class", "future col-10")
        }
        // console.log(localsave[i].time)
    }
    
    
}

// calls the renderstorage function. 
renderstorage();
