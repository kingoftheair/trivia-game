var question = " ";
var questionNumber = 0;
var answer = [];
var correctAnswer = [];
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var usersPick;


//questions and answers
var questions = [{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:[5,100,150,200],
    correctAnswer: [200],
},{
    question:"What is the first name of the main character you play as in Red Dead Redemption 2??",
    answer:["Arthur","John","Duke","Joe"],
    correctAnswer: ["Arthur"],
},{
    question:"What is the first area where the actual base camp is started in Red Dead Redemption 2??",
    answer:["The Heartland","Strawberry","Blackwater","Grizzley"],
    correctAnswer: ["The Heartland"],
}]

//starts the timer 
function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 1000);
};

//allows timer to count down and fires stopTimer function and removes questions and aswers after game finishes
function timerCountDown () {
    timer--;
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
    }
};

//clears the timer
function stopTimer () {
    clearInterval(countdown)
}


//shows the questions and answers on page
function QuestionsAndAnswers () {
    
    $("#question1").text(questions[0].question);
    $("#answer1-1").text(questions[0].answer[0]);  
    $("#answer1-2").html(questions[0].answer[1]); 
    $("#answer1-3").html(questions[0].answer[2]); 
    $("#answer1-4").html(questions[0].answer[3]);
    
    $("#question2").text(questions[1].question);
    $("#answer2-1").text(questions[1].answer[0]);  
    $("#answer2-2").html(questions[1].answer[1]); 
    $("#answer2-3").html(questions[1].answer[2]); 
    $("#answer2-4").html(questions[1].answer[3]);
    
    $("#question3").text(questions[2].question);
    $("#answer3-1").text(questions[2].answer[0]);  
    $("#answer3-2").html(questions[2].answer[1]); 
    $("#answer3-3").html(questions[2].answer[2]); 
    $("#answer3-4").html(questions[2].answer[3]);
};
  
//question 1 answer set
$("#answer1-4").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer1-4" ).off( "click" );
    $( "#answer1-1,#answer1-2,#answer1-3" ).off( "click" );
})
    $("#answer1-1, #answer1-2, #answer1-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1,#answer1-2,#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});

//question 2 answer set
$("#answer2-1").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-2,#answer2-3,#answer2-4" ).off( "click" );
})
    $("#answer2-2, #answer2-3, #answer2-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2,#answer2-3,#answer2-4" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
});

//question 3 answer set
$("#answer3-1").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer3-1" ).off( "click" );
    $( "#answer3-2,#answer3-3,#answer3-4" ).off( "click" );
})
    $("#answer3-2, #answer3-3, #answer3-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2,#answer3-3,#answer3-4" ).off( "click" );
    $( "#answer3-1" ).off( "click" );
});



//removes the questions and answers so no visible when first page of game appears
function removeQandA () {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#answer1-1").hide();
    $("#answer1-2").hide();
    $("#answer1-3").hide();
    $("#answer1-4").hide();
    $("#answer2-1").hide();
    $("#answer2-2").hide();
    $("#answer2-3").hide();
    $("#answer2-4").hide();
    $("#answer3-1").hide();
    $("#answer3-2").hide();
    $("#answer3-3").hide();
    $("#answer3-4").hide();
}

//shows questions and answers after start button is clicked
function showQandA () {
    $("#question1").show();
    $("#question2").show();
    $("#question3").show();
    $("#answer1-1").show();
    $("#answer1-2").show();
    $("#answer1-3").show();
    $("#answer1-4").show();
    $("#answer2-1").show();
    $("#answer2-2").show();
    $("#answer2-3").show();
    $("#answer2-4").show();
    $("#answer3-1").show();
    $("#answer3-2").show();
    $("#answer3-3").show();
    $("#answer3-4").show();
}



removeQandA();



//starts the game
$(document).ready(function() {
    $("#start").on("click", function() {
        $(this).hide();
        setTimeout(showQandA, 1000);
        setTimeout(QuestionsAndAnswers, 1000);     
        timerStart();
    
    });
});