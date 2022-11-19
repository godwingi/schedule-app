//load wrapper
document.querySelector('.description-9').innerHTML = localStorage.getItem('hour-9');



$(window).on('load', function() {
$('.saveBtn').on('click', function (event) {
  event.preventDefault;
  
  var hour = ($(this).parent().attr("id")); 
  var thingsToDo = ($(this).siblings('textarea').val());
  console.log($(this).siblings('textarea').val(thingsToDo))
  console.log($(this).parent().attr("id"))
  
  localStorage.setItem(JSON.stringify(hour), JSON.stringify(thingsToDo))

  function renderSchedule() {

    var savedList = JSON.parse(localStorage.getItem('hour-9'));
      console.log(savedList);
  
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //
  // TODO: Add code to display the current date in the header of the page.
  var now = dayjs();
  $('#currentDay').text(now.format('dddd, MMMM D, YYYY'));
  console.log(now);
  $('#currentDay').css("font-size", "50px");

renderSchedule()
})})