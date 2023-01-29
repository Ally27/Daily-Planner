var currentDay = $("#currentDay");
var currentHour;
//time and date
$(function () {
  var todaysDate = dayjs().format("dddd, MMMM YYYY D, hh:mm a");
  $("#currentDay").html(todaysDate);
  setInterval(currentHour);
});
//local storage
$(".btn").on("click", function () {
  var inputValue = $(this).siblings(".description").val();
  var id = $(this).parent().attr("id");
  localStorage.setItem(id, inputValue);
});

$("#hour-0 .description").val(localStorage.getItem("hour-0"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));
$("#hour-21 .description").val(localStorage.getItem("hour-21"));
$("#hour-22 .description").val(localStorage.getItem("hour-22"));
$("#hour-23 .description").val(localStorage.getItem("hour-23"));

//Color changes based on time
$(".time-block").each(function () {
  var parent = $(this).attr("id");
  var setHour = parseInt(parent.slice(5));
  var currentDay = dayjs().format("YYYY-MM-DD " + setHour);
  var currentHour = dayjs(currentDay);
  var today = dayjs().format("YYYY-MM-DD H");
  var pastTime = currentHour.diff(today, "hour");
  console.log(pastTime);
  if (pastTime === 0) {
    $(this).addClass("present");
  }
  if (pastTime > 0) {
    $(this).addClass("future");
  }
  if (pastTime < 0) {
    $(this).addClass("past");
  }
});
