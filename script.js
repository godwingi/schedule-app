//load wrapper
document.querySelector('.description-9').innerHTML = localStorage.getItem('hour-9');
document.querySelector('.description-10').innerHTML = localStorage.getItem('hour-10');
document.querySelector('.description-11').innerHTML = localStorage.getItem('hour-11');
document.querySelector('.description-12').innerHTML = localStorage.getItem('hour-12');
document.querySelector('.description-1').innerHTML = localStorage.getItem('hour-1');
document.querySelector('.description-2').innerHTML = localStorage.getItem('hour-2');
document.querySelector('.description-3').innerHTML = localStorage.getItem('hour-3');
document.querySelector('.description-4').innerHTML = localStorage.getItem('hour-4');
document.querySelector('.description-5').innerHTML = localStorage.getItem('hour-5');
document.querySelector('.description-6').innerHTML = localStorage.getItem('hour-6');
document.querySelector('.description-7').innerHTML = localStorage.getItem('hour-7');
document.querySelector('.description-8').innerHTML = localStorage.getItem('hour-8');
document.querySelector('.description-9').innerHTML = localStorage.getItem('hour-9');


$(window).on('load', function () {

//Retrieve saved items from local storage
  function renderSchedule(hour) {

    let savedList = (localStorage.getItem(hour))
    console.log(savedList);
   }


//Save Items to Local Storage when clicked
$('.saveBtn').on('click', function (event) {
    event.preventDefault;

    let hour = ($(this).parent().attr("id"));
    let thingsToDo = ($(this).siblings('textarea').val());
    console.log($(this).siblings('textarea').val(thingsToDo))
    console.log($(this).parent().attr("id"))

    localStorage.setItem(hour, JSON.stringify(thingsToDo))

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    dayjs().hour() // gets current hour
    newDate = dayjs().hour(12) // returns new dayjs object

    if(dayjs().hour() === ) {

    }


//Display Current Date
    var now = dayjs();
    $('#currentDay').text(now.format('dddd, MMMM D, YYYY'));
    console.log(now);
    $('#currentDay').css("font-size", "50px");

    renderSchedule(hour)
  })

})
