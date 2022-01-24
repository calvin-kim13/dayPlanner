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

// BACKGROUND COLOR FUNCTION
function renderTimeColor() {
    const currentHour = moment().hours();
    $('.time-block').each(function() {
        const rowHour = parseInt($(this).attr('id'));
        if (rowHour < currentHour) {
            $(this).addClass('past');
        } else if (rowHour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        };
    });
};

// GETTING SAVED VALUES FROM LOCAL STORAGE 
for (let i = 8; i < 23; i++) {
    $(`#${i}`).children('textarea').val(localStorage.getItem(`${i}`));
}

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

// CALLINV FUNCTIONS
renderTimeColor();
runningTime();