
//define variables used
var question = " ";
var answer = [];
var correctAnswer = "";

//questions and answers
var questions = [{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:["5","100","150","200"],
    correctAnswer:"200",
},{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:["5","100","150","200"],
    correctAnswer:"200",
},{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:["5","100","150","200"],
    correctAnswer:"200",
},{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:["5","100","150","200"],
    correctAnswer:"200",
}]

$(document).ready(function(){
$("#start").on("click", function() {
    $("#start").hide();
    $("#question1").html(question);
    $("#answer1").html(answer);

});
});