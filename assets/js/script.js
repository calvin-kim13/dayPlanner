// VARIABLES
let timeDisplayEl = $('#currentDay');
let saveBtnEl = $('.saveBtn');
let clearBtnEl = $('#clear-btn')
let textarea = $('textarea')

// TIME AND DATE FUNCTION IN HEADER
function runningTime() {
    let currentTimeDate = (moment().format('dddd, MMMM D, YYYY [at] h:mm:ss a'));
    timeDisplayEl.text(currentTimeDate);
    setInterval(runningTime, 1000);
}

// SAVING VALUES IN TEXTAREA ON PAGE 
$('#8').children('textarea').val(localStorage.getItem('8'))
$('#9').children('textarea').val(localStorage.getItem('9'))
$('#10').children('textarea').val(localStorage.getItem('10'))
$('#11').children('textarea').val(localStorage.getItem('11'))
$('#12').children('textarea').val(localStorage.getItem('12'))
$('#1').children('textarea').val(localStorage.getItem('1'))
$('#2').children('textarea').val(localStorage.getItem('2'))
$('#3').children('textarea').val(localStorage.getItem('3'))
$('#4').children('textarea').val(localStorage.getItem('4'))
$('#5').children('textarea').val(localStorage.getItem('5'))
$('#6').children('textarea').val(localStorage.getItem('6'))
$('#7').children('textarea').val(localStorage.getItem('7'))
$('#8pm').children('textarea').val(localStorage.getItem('8pm'))
$('#9pm').children('textarea').val(localStorage.getItem('9pm'))
$('#10pm').children('textarea').val(localStorage.getItem('10pm'))

// SAVE BUTTON FUNCTIONALITY
saveBtnEl.on('click', function () {
    const time = $(this).parent().attr('id')
    const value = $(this).siblings('textarea').val()
    localStorage.setItem(time, value)
    console.log(time, value)
})

// CLEAR VALUES IN TEXTAREA BUTTON
clearBtnEl.on('click', function() {
    localStorage.clear();
    window.location.reload();
})

runningTime();



