let currentDateTimeSpan = $("#current-date-time");

// When the page loads, ready event calls this function and background color
$("document").ready(function () {
  $("tr").each(function () {
    let inputControl = $(this).find("td input")[0];
    let inputID = "#" + inputControl.id;
    // console.log(inputControl.id);
    // console.log(inputID);
    let inputValueFromLocalStorage = localStorage.getItem(inputID);
    if (inputValueFromLocalStorage !== null) {
      $(inputID).val(inputValueFromLocalStorage);
    }
  });
});

// Save button
function saveEvent(inputID) {
  let inputText = $(inputID).val();
  localStorage.setItem(inputID, inputText);
}

// Date time
function updateCurrentTime() {
  currentDateTimeSpan.text(moment().format("MMMM DD YYYY, hh:mm:ss"));
}

function checkTime() {
  var timer = setInterval(function () {
    updateCurrentTime();
  }, 1000);
}
checkTime();
