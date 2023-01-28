//Live time and date
$(function () {
  var todaysDate = dayjs().format("dddd, MMMM YYYY D, hh:mm:ss a");
  $("#currentDay").html(todaysDate);
});

//time blocking
$(".time-block").each(function () {
  var parent = $(this).attr("id");
  var setHour = parseInt(parent.slice(5));
  var currentDay = dayjs().format("YYYY-MM-DD " + setHour);
  var currentHour = dayjs(currentDay);
  var today = dayjs().format("YYYY-MM-DD H");
  var pastTime = currentHour.diff(today, "hour");
  if (pastTime === 0) {
    $(this).addClass("present");
  }
  if (pastTime > 0) {
    $(this).addClass("future");
  }
  if (pastTime < 0) {
    $(this).addClass("past");
  }
  //Color changes based on time
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

function colorChange() {
  var currentHour = moment().hours();
  if (currentId < currentHour) {
    $(this).addClass("past");
  } else if (currentId > currentHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
}
colorChange();
