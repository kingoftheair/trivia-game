//define variables used
var question = " ";
var questionNumber = 0;
var answer = [];
var correctAnswer = [];
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var pic;
var usersPick;


//questions and answers
var questions = [{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:["5","100","150","200"],
    correctAnswer: ["200"],
    pic: "<img src='assets/images/animals.jpg'>"
},{
    question:"What is the first name of the main character you play as in Red Dead Redemption 2??",
    answer:["Arthur","John","Duke","Joe"],
    correctAnswer: ["Arthur"],
    pic: "<img src='assets/images/arthur.jpg'>"
},{
    question:"What is the first area where the actual base camp is started in Red Dead Redemption 2??",
    answer:["The Heartland","Strawberry","Blackwater","Grizzley"],
    correctAnswer: ["The Heartland"],
    pic: "<img src='assets/images/heartland.jpg'>"
}]


//functions used

//to start timer
function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 1000);
};

function timerCountDown () {
    timer--;
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        stopTimer();
        $("#question").text("Time's Up! The correct answer is " + questions[questionNumber].correctAnswer);
        $("#answer").html(questions[questionNumber].pic);
        unansweredTotal++;
        next();
    }
};

//to stop the timer
function stopTimer () {
    clearInterval(countdown)
}

function QuestionsAndAnswers () {
    $("#question").text(questions[questionNumber].question);
    $("#answer").html("<p class='answer'>"+ questions[questionNumber].answer[0] + "<p>" + 
    "<p class='answer'>"+ questions[questionNumber].answer[1] + "<p>" + 
    "<p class='answer'>"+ questions[questionNumber].answer[2] + "<p>" + 
    "<p class='answer'>"+ questions[questionNumber].answer[3] + "<p>")

    $("#answer").on("click", function () {
        usersPick = $(this).text();
        if (usersPick === questions[questionNumber].correctAnswer) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });
}

function rightAnswer() {
    stopTimer();
    $("#question").text("You got it right!");
    $("#answer").html(questions[questionNumber].pic);
    setTimeout(next, 2000);

}

function wrongAnswer () {
    stopTimer();
    incorrectAnswerTotal++;
    $("#question").text("You got it wrong! The correct answer is " + questions[questionNumber].correctAnswer);
    $("#answer").html(questions[questionNumber].pic);
    setTimeout(next, 2000);
}

function next() {
    if (questionNumber < 2 ) 
    {
        questionNumber++;
        setTimeout(QuestionsAndAnswers, 2000);
        setTimeout(timerStart, 1000);
    } else  {
        
    }
} 

function reset() {
    if (questionNumber === 3) {
    stopTimer();
    timerStart();
    }
}


//start the game 

$(document).ready(function() {
    $("#start").on("click", function() {
        $(this).hide();
        setTimeout(QuestionsAndAnswers, 1000);     
        timerStart();
    
     });
     
    })
