// VARIABLES
let timeDisplayEl = $('#currentDay');

// TIME AND DATE FUNCTION IN HEADER
function runningTime() {
    let currentTimeDate = (moment().format('dddd, MMMM D, YYYY [at] h:mm:ss a'));
    timeDisplayEl.text(currentTimeDate);
    setInterval(runningTime, 1000);
}

// For Loop
$('#8').children('textarea').val(localStorage.getItem('8'))
$('#9').children('textarea').val(localStorage.getItem('9'))

// add functionality to save buttons
$('.saveBtn').on('click', function () {
    const time = $(this).parent().attr('id')
    const value = $(this).siblings('textarea').val()
    localStorage.setItem(time, value)
    console.log(time, value)
})



















runningTime()

