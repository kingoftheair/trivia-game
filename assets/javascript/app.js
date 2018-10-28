
//define variables used
var question = " ";
var answer = [];
var correctAnswer = [];
var question = "";
var answer = [];
var timer = 30;
var countdown;
var userPick;

//questions and answers
var questions = [{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:[5,100,150,200],
    correctAnswer:[3],
},{
    question:"What is the first name of the main character you play as in Red Dead Redemption 2??",
    answer:["Arthur","John","Duke","Joe"],
    correctAnswer:[0],
},{
    question:"Who is the main character in Red Dead Redemption??",
    answer:["Arthur","Mary","John","The Rock"],
    correctAnswer:[2],
},{
    question:"What is the first area where the actual base camp is started in Red Dead Redemption 2??",
    answer:["The Heartland","Strawberry","Blackwater","Grizzley"],
    correctAnswer:[0],
}]

//functions used

function timeStart () {
    clearInterval(countdown);
    countdown = setInterval(timerCountDown, 1000);
}

function timerCountDown () {
    timer--;
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
}

function questionCall1() {
    $("#question").text(questions[0].question);
    $("#answer1").text(questions[0].answer[0]);
    $("#answer2").text(questions[0].answer[1]);
    $("#answer3").text(questions[0].answer[2]);
    $("#answer4").text(questions[0].answer[3]);
    $("#answer4").on("click", function(){
    $("#question2").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    questionCall2();
    timer = 30
    timeStart();
 });
}


function questionCall2() {
    $("#question2").text(questions[1].question);
    $("#answer2-1").text(questions[1].answer[0]);
    $("#answer2-2").text(questions[1].answer[1]);
    $("#answer2-3").text(questions[1].answer[2]);
    $("#answer2-4").text(questions[1].answer[3]);
    $("#answer2-1").on("click", function(){
        $("#question2-3").hide();
        $("#answer2-1").hide();
        $("#answer2-2").hide();
        $("#answer2-3").hide();
        $("#answer2-4").hide();
        questionCall3();
        timer = 30
        timeStart();
     });
}

function questionCall3() {
    $("#question3").text(questions[2].question);
    $("#answer3-1").text(questions[2].answer[0]);
    $("#answer3-2").text(questions[2].answer[1]);
    $("#answer3-3").text(questions[2].answer[2]);
    $("#answer3-4").text(questions[2].answer[3]);
    $("#answer3-3").on("click", function(){
        $("#question3").hide();
        $("#answer3-1").hide();
        $("#answer3-2").hide();
        $("#answer3-3").hide();
        $("#answer3-4").hide();
        $("#win").show();
        timer = 30
       timeStart();
        questionCall4();
     });
}

function questionCall4() {
    $("#question4").text(questions[3].question);
    $("#answer4-1").text(questions[3].answer[0]);
    $("#answer4-2").text(questions[3].answer[1]);
    $("#answer4-3").text(questions[3].answer[2]);
    $("#answer4-4").text(questions[3].answer[3]);
    $("#answer4-1").on("click", function(){
     });
}



$(document).ready(function() {
$("#start").on("click", function() {
    $("#start").hide();
    timeStart();
    setTimeout(questionCall1, 1000);

});
});

