//Live time and date
$(function () {
  var todaysDate = dayjs().format("dddd, MMMM YYYY D, hh:mm:ss a");
  $("#currentDay").html(todaysDate);
});

//local storage
$("btn").on("click", function () {
  var inputValue = $(this).siblings(".description").val();
  var id = $(this).parent().attr("id");
  localStorage.setItem(id, inputValue);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

//Color changes based on time
function colorChange() {}
