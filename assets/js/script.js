// VARIABLES
var timeDisplayEl = $('#currentDay');

// TIME AND DATE FUNCTION IN HEADER
function runningTime() {
    var currentTimeDate = (moment().format('dddd, MMMM D, YYYY [at] h:mm:ss a'));
    timeDisplayEl.text(currentTimeDate);
    setInterval(runningTime, 1000);
}






















runningTime()

