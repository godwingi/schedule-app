//load wrapper
$(window).on('load', function() {

$('.saveBtn').on('click', function (event) {
  event.preventDefault;
  
  var hour = ($(this).parent().attr("id")); 
  var thingsToDo = ($(this).siblings('textarea').val());
  console.log($(this).siblings('textarea').val(thingsToDo))
  console.log($(this).parent().attr("id"))
  
  localStorage.setItem(JSON.stringify(hour), JSON.stringify(thingsToDo))

  function renderSchedule() {
    // Use JSON.parse() to convert text to JavaScript object
  //  var savedTime = localStorage.getItem(JSON.parse(hour))
   
    var savedList = JSON.parse(localStorage.getItem(hour, thingsToDo));
    console.log(savedList.hour, savedList.things)
        $(this).siblings('textarea').innerHTML = thingsToDo
        console.log(thingsToDo)
    
    JSON.parse(localStorage.getItem(hour));
    console.log(hour)
    

    // ($(this).siblings('textarea').val(savedList)).innerHTML
    // ($(this).parent().attr("id")).innerHTML = savedSchedule.hour;
    //  else {
    //   return;
  
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