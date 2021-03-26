// DOM VARIABLES
var currentDateTimeSpan = $("#current-date-time");


// JAVASCRIPT VARIABLES



// FUNCTION DEFINITIONS
function updateCurrentTime(){
    currentDateTimeSpan.text(moment().format("MMMM DD YYYY, hh:mm:ss"));
}


function checkTime(){
    var timer = setInterval(function(){
        updateCurrentTime();
    }, 1000);
}


// EVENT LISTENERS



// FUNCTION CALLS

// console.log(moment().format("MMMM DD YYYY, hh:mm:ss"));
// updateCurrentTime();
checkTime();