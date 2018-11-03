// list of variables
var question = " ";
var answer = [];
var correctAnswer = [];
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var answered = false;


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
    answerClick();
};




//allows timer to count down and fires stopTimer function and removes questions and aswers after game finishes
function timerCountDown () {
    timer--;
    //correctAnswerTotal == 0;
    //incorrectAnswerTotal == 0;
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        $( "#answer1-1" ).off( "click" );
        $( "#answer1-2" ).off( "click" );
        $( "#answer1-3" ).off( "click" );
        $( "#answer1-4" ).off( "click" );
        $( "#answer2-1" ).off( "click" );
        $( "#answer2-2" ).off( "click" );
        $( "#answer2-3" ).off( "click" );
        $( "#answer2-4" ).off( "click" );
        $( "#answer3-1" ).off( "click" );
        $( "#answer3-2" ).off( "click" );
        $( "#answer3-3" ).off( "click" );
        $( "#answer3-4" ).off( "click" );
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    } else if (correctAnswerTotal === 3 && incorrectAnswerTotal === 0 ) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    } else if (correctAnswerTotal === 2 && incorrectAnswerTotal === 1) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 4000);
    } else if (correctAnswerTotal === 1 && incorrectAnswerTotal === 2) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    }  else if (correctAnswerTotal === 0 && incorrectAnswerTotal === 3) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    }
};

//clears the timer
function stopTimer () {
    clearInterval(countdown)
    timer = 31
}

function hideAnswerTotal () {
    $("#numberofcorrectanswers").hide();
    $("#numberofincorrectanswers").hide();
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
  
function answerClick () {
//question 1 answer set
$("#answer1-4").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
})
    $("#answer1-1").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});
$("#answer1-2").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});
$("#answer1-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});

//question 2 answer set
$("#answer2-1").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
})
    $("#answer2-2").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
});
$("#answer2-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
});
$("#answer2-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
});

//question 3 answer set
$("#answer3-1").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer3-1" ).off( "click" );
    $( "#answer3-2" ).off( "click" );
    $( "#answer3-3" ).off( "click" );
    $( "#answer3-4" ).off( "click" );
   // $( "#answer3-2,#answer3-3,#answer3-4" ).off( "click" );
})
    $("#answer3-2").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2").off( "click" );
    $( "#answer3-3").off( "click" );
    $( "#answer3-4").off( "click" );
    $( "#answer3-1" ).off( "click" );
});
$("#answer3-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2").off( "click" );
    $( "#answer3-3").off( "click" );
    $( "#answer3-4").off( "click" );
    $( "#answer3-1" ).off( "click" );
});
$("#answer3-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2").off( "click" );
    $( "#answer3-3").off( "click" );
    $( "#answer3-4").off( "click" );
    $( "#answer3-1" ).off( "click" );
});

}




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


//resets game
function resetGame() {
    hideAnswerTotal();
    $("#timeRemain").hide();
    //$("#start").show();
    correctAnswerTotal = 0;
    incorrectAnswerTotal = 0;
    timer = 31
    $(document).ready(function() {
        $("#start").show();
        $("#start").on("click", function() {
            $("#start").hide();
            setTimeout(showQandA, 1000);
            setTimeout(QuestionsAndAnswers, 1000);
            $("#timeRemain").show();    
        }); 
    });
}

removeQandA();



//starts the game
$(document).ready(function() {
    $("#start").on("click", function() {
        $(this).hide();
        setTimeout(showQandA, 1000);
        setTimeout(QuestionsAndAnswers, 1000);   
        timerStart();
        //answerClick();
    });
    
});