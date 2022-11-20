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
  checkCurrentTime();
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
    console.log(hour)
});


//Display Current Date
var now = dayjs();
$('#currentDay').text(now.format('dddd, MMMM D, YYYY'));
console.log(now);
$('#currentDay').css("font-size", "50px");

//Check the time to change classes to past / present or future
function checkCurrentTime () {
  let currentHour = dayjs().hour()
  console.log(currentHour)
  
  $('.time-block').each(function() {
 let blockTime = parseInt(
    $(this)
      .attr('id')
      .split('-')[1]
 )
 console.log(blockTime)

    if (blockTime < currentHour ) {
      $(this).addClass(".past")
    } 
    else if (blockTime === currentHour) {
      $(this).removeClass(".future")
      $(this).addClass(".present")
    } 
    else; {
      $(this).removeClass(".past")
      $(this).removeClass(".present")
      $(this).addClass(".future")
  }}
)}
})