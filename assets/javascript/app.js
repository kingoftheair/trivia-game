
//define variables used
var question = " ";
var questionNumber = 0;
var answer = [];
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var answer = [];
var unansweredTotal = 0;
var timer = 31;
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

function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 1000);
};

function timerCountDown () {
    timer--;
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
    stopTimer();
        $("#question").text("Time's Up! The correct answer is " + questions[questionNumber].correctAnswer);
        $("#answer").html(questions[questionNumber].pic);
        unansweredTotal++;
        next();
};

function stopTimer () {
    clearInterval(countdown)
}

function question1 () {
    $("#question").text(questions[0].question);

}
function question2 () {
    $("#question").text(questions[1].question);

}
function question3 () {
    $("#question").text(questions[2].question);

}
function question4 () {
    $("#question").text(questions[3].question);

}

function answer1 () {
    $("#answer").append("<p id='firstans'>"+ questions[0].answer[0] + "<p>")
    $("#answer").append("<p id='secondans'>"+ questions[0].answer[1] + "<p>")
    $("#answer").append("<p id='thirdans'>"+ questions[0].answer[2] + "<p>")
    $("#answer").append("<p id='fourthans'>"+ questions[0].answer[3] + "<p>")
    if (
    $("#fourthans").on("click", function () {
        console.log("correct");
        stopTimer();
        $("#question").text("You got it right!");
        $("#answer").html('<img src="assets/images/hills.jpg" />')
        correctAnswerTotal++;
        setTimeout(question2, answer2, 2000);
        //setTimeout(answer2, 2000);
    })); else { 
        $("#firstans").on("click", function () {
            console.log("correct");
            stopTimer();
            $("#question").text("You got it right!");
            $("#answer").html('<img src="assets/images/hills.jpg" />')
            correctAnswerTotal++;
            setTimeout(question2, answer2, 2000);

    })
}

    function answer2 () {
        $("#answer").append("<p id='firstans'>"+ questions[1].answer[0] + "<p>")
        $("#answer").append("<p id='secondans'>"+ questions[1].answer[1] + "<p>")
        $("#answer").append("<p id='thirdans'>"+ questions[1].answer[2] + "<p>")
        $("#answer").append("<p id='fourthans'>"+ questions[1].answer[3] + "<p>")
        $("#firstans").on("click", function () {
            console.log("correct");
            stopTimer();
            $("#question").text("You got it right!");
            $("#answer").hide();
        });
        
    }

        function answer3 () {
            $("#answer").append("<p id='firstans'>"+ questions[2].answer[0] + "<p>")
            $("#answer").append("<p id='secondans'>"+ questions[2].answer[1] + "<p>")
            $("#answer").append("<p id='thirdans'>"+ questions[2].answer[2] + "<p>")
            $("#answer").append("<p id='fourthans'>"+ questions[2].answer[3] + "<p>")
            $("#thirdans").on("click", function () {
                console.log("correct");
                stopTimer();
                $("#question").text("You got it right!");
                $("#answer").hide();
            });
        }

            function answer4 () {
                $("#answer").append("<p id='firstans'>"+ questions[3].answer[0] + "<p>")
                $("#answer").append("<p id='secondans'>"+ questions[3].answer[1] + "<p>")
                $("#answer").append("<p id='thirdans'>"+ questions[3].answer[2] + "<p>")
                $("#answer").append("<p id='fourthans'>"+ questions[3].answer[3] + "<p>")
                $("#firstans").on("click", function () {
                    console.log("correct");
                    stopTimer();
                    $("#question").text("You got it right!");
                    $("#answer").hide();
                });
            }
           
            $("#firstans").on("click", function () {
                console.log("wrong");
            });
            $("#secondans").on("click", function () {
                console.log("wrong");
            });
            $("#thirdhans").on("click", function () {
                console.log("wrong");
            });
    



$(document).ready(function() {
    $("#start").on("click", function() {
        $("#start").hide();
        timerStart();
        setTimeout(question1, 1000);
        setTimeout(answer1, 1000);

     

    });
});

