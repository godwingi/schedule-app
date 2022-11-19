//load wrapper
document.querySelector('.description-9').innerHTML = localStorage.getItem('hour-9');
document.querySelector('.description-10').innerHTML = localStorage.getItem('hour-10');
document.querySelector('.description-11').innerHTML = localStorage.getItem('hour-11');
document.querySelector('.description-12').innerHTML = localStorage.getItem('hour-12');
document.querySelector('.description-1').innerHTML = localStorage.getItem('hour-13');
document.querySelector('.description-2').innerHTML = localStorage.getItem('hour-14');
document.querySelector('.description-3').innerHTML = localStorage.getItem('hour-15');
document.querySelector('.description-4').innerHTML = localStorage.getItem('hour-16');
document.querySelector('.description-5').innerHTML = localStorage.getItem('hour-17');
document.querySelector('.description-6').innerHTML = localStorage.getItem('hour-18');
document.querySelector('.description-7').innerHTML = localStorage.getItem('hour-19');
document.querySelector('.description-8').innerHTML = localStorage.getItem('hour-20');
document.querySelector('.description-9').innerHTML = localStorage.getItem('hour-21');


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

    renderSchedule(hour)
});
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // dayjs().hour() // gets current hour
    // newDate = dayjs().hour(12) // returns new dayjs object

    // if(dayjs().hour() === ) {

    // }

    const minMax = window.dayjs_plugin_minMax;
    const isBetween = window.dayjs_plugin_isBetween;
    dayjs.extend(minMax);
    dayjs.extend(isBetween);
    console.log(
      "MAX: ",
      dayjs.max(dayjs(), dayjs("2022-11-17", 'h'), dayjs("2022-11-2050"))
    );
    console.log(
      "MIN: ",
      dayjs.min(dayjs(), dayjs("2022-11-17"), dayjs("2022-11-2050"))
    );
    console.log(
      "BETWEEN: ",
      dayjs("2022-11-17").isBetween("2022-11-2050", "h", null, "[)")
    );

    let currentHour = dayjs().hour()
    console.log(currentHour)
    
    $('#hour-17').addClass(".present")

    // $("div").each(function () {
    //   let timeDiv = $(this).siblings('9')
    //    console.log(timeDiv)
  //     if (currentHour == timeDiv) {
  //       $(this).removeClass(".future")
  //       $(this).removeClass(".past")
  //       $(this).addClass(".present")
  //     } else if (currentHour => timeDiv) {
  //       $(this).addClass(".future")
  //       $(this).removeClass(".past")
  //       $(this).removeClass(".present")
  // } else (currentHour <= timeDiv); {
  //   $(this).removeClass(".future")
  //   $(this).addClass(".past")
  //   $(this).removeClass(".present")
  // }
}
  )

// })

//Display Current Date
var now = dayjs();
$('#currentDay').text(now.format('dddd, MMMM D, YYYY'));
console.log(now);
$('#currentDay').css("font-size", "50px");
