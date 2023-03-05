var date = new Date();
date.setDate(20);
var end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

var start_date = date.getDay();

var today = date.getDate();

var cells = "";

//for getting input from the input box

// function handleDate() {
//   var input_feild = document.getElementById("input_feild").value;
//   //console.log("input_feild : " + input_feild);
//   var new_today = date.setDate(document.getElementById("input_feild").value);
//   var new_get_date = date.getDate(new_today);
// }

//for setting the position of particular date
for (let j = start_date; j > 0; j--) {
  cells += "<div>" + "#" + "</div>";
}

//for filling the dates in the calender
for (let i = 1; i <= end_date; i++) {
  if (i == today) {
    cells += "<div class='today'>" + i + "</div>";
  } else {
    cells += "<div>" + i + "</div>";
  }
}

// for paragraph repesenting the full date
document.getElementById("date_str").innerHTML = date.toDateString();

// for displaying the dates in the form of cells
document.getElementsByClassName("calender_days")[0].innerHTML = cells;
