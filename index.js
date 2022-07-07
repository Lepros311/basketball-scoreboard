const homeBtn1 = document.getElementById("home-btn1");
const homeBtn2 = document.getElementById("home-btn2");
const homeBtn3 = document.getElementById("home-btn3");
const guestBtn1 = document.getElementById("guest-btn1");
const guestBtn2 = document.getElementById("guest-btn2");
const guestBtn3 = document.getElementById("guest-btn3");
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const newGameBtn = document.getElementById("new-game-btn");
const timer = document.getElementById("timer");
const timeoutBtn = document.getElementById("timeout-btn");
const resumeBtn = document.getElementById("resume-btn");
let homeCount = 0;
let guestCount = 0;

homeBtn1.addEventListener("click", incrementHome1);
homeBtn2.addEventListener("click", incrementHome2);
homeBtn3.addEventListener("click", incrementHome3);
guestBtn1.addEventListener("click", incrementGuest1);
guestBtn2.addEventListener("click", incrementGuest2);
guestBtn3.addEventListener("click", incrementGuest3);
newGameBtn.addEventListener("click", newGame);
timeoutBtn.addEventListener("click", timeout);
resumeBtn.addEventListener("click", resume);


function incrementHome1() {
    homeCount++;
    homeScore.textContent = homeCount;
    highlight();
}

function incrementHome2() {
    homeCount = homeCount + 2;
    homeScore.textContent = homeCount;
    highlight();
}

function incrementHome3() {
    homeCount = homeCount + 3;
    homeScore.textContent = homeCount;
    highlight();
}

function incrementGuest1() {
    guestCount++;
    guestScore.textContent = guestCount;
    highlight();
}

function incrementGuest2() {
    guestCount = guestCount + 2;
    guestScore.textContent = guestCount;
    highlight();
}

function incrementGuest3() {
    guestCount = guestCount + 3;
    guestScore.textContent = guestCount;
    highlight();
}

function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeCount = 0;
    guestCount = 0;
    homeScore.classList.remove("border-add");
    guestScore.classList.remove("border-add");
    document.getElementById('timer').textContent =
        "5" + ":" + "00";
    clearInterval(t);
    setTimeout(startTimer, 1000);
    
}



function highlight() {
    if((parseInt(homeScore.textContent)) > (parseInt(guestScore.textContent))) {
        homeScore.classList.add("border-add");
        guestScore.classList.remove("border-add");
    } else if ((parseInt(homeScore.textContent)) < (parseInt(guestScore.textContent))) {
        guestScore.classList.add("border-add");
        homeScore.classList.remove("border-add");
    } else {
        homeScore.classList.remove("border-add");
        guestScore.classList.remove("border-add");
    }
}

// function countdown() {
    
// }

// setInterval(countdown, 1000);

document.getElementById('timer').innerHTML =
  "5" + ":" + "00";

let t;

function startTimer() {

  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  
  if(s==59){m=m-1}
  if(m<0){
    return
    }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
    
    // console.log(`${m} + ":" + ${s}`);
    // console.log(timer.textContent)
  t = setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function timeout() {
    clearTimeout(t);
}

function resume() {
    startTimer();
}