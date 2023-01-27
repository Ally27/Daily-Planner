$(function () {
  var todaysDate = dayjs().format("dddd, MMMM YYYY D, hh:mm:ss a");
  $("#currentDay").html(todaysDate);
});
