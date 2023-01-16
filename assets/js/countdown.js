var setEndDate1 = "Jan 17, 2023 15:00:00";
var setEndDate2 = "Jan 17, 2023 15:30:00";
var setEndDate3 = "Jan 17, 2023 16:00:00";
var setEndDate4 = "Jan 17, 2023 17:15:00";
var setEndDate5 = "Jan 18, 2023 18:30:00";

function startCountDownDate(dateVal) {
  var countDownDate = new Date(dateVal).getTime();
  return countDownDate;
}

function countDownTimer(start, targetDOM) {
  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = start - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
  // days = (days < 10) ? "0" + days : days;
  // hours = (hours < 10) ? "0" + hours : hours;
  // minutes = (minutes < 10) ? "0" + minutes : minutes;
  // seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Output the result in an element with countdown-timer-x"
  document.querySelector("#" + targetDOM).textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (days == 0) {
    document.querySelector("#" + targetDOM).textContent = hours + "h " + minutes + "m " + seconds + "s ";
  } 

  if (days == 0 && hours == 0) {
    document.querySelector("#" + targetDOM).textContent = minutes + "m " + seconds + "s ";
  } 

  if (days == 0 && hours == 0 && minutes == 0) {
    document.querySelector("#" + targetDOM).textContent = seconds + "s ";
  }
  
  // If the count down is over, write some text 
  if (distance < 0) {
    // clearInterval();
    document.querySelector("#" + targetDOM).textContent = "Expired";
  }
}

var cdd1 = startCountDownDate(setEndDate1);
var cdd2 = startCountDownDate(setEndDate2);
var cdd3 = startCountDownDate(setEndDate3);
var cdd4 = startCountDownDate(setEndDate4);
var cdd5 = startCountDownDate(setEndDate5);

setInterval(function(){ countDownTimer(cdd1, "countdown-timer-1"); }, 1000);
setInterval(function(){ countDownTimer(cdd2, "countdown-timer-2"); }, 1000);
setInterval(function(){ countDownTimer(cdd3, "countdown-timer-3"); }, 1000);
setInterval(function(){ countDownTimer(cdd4, "countdown-timer-4"); }, 1000);
setInterval(function(){ countDownTimer(cdd5, "countdown-timer-5"); }, 1000);