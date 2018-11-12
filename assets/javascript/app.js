//have the start button and user should click the button to start the game
//It should hide the trivia questions

//set the timer to 30 seconds
//it should run once the user hits the start button
//make the question display

var totalTime = 25;
var time;
var totalQuestion = 6;
var totalCorrect = 0;
var totalIncorrect = 0;
var unanswered = 6;



function timedCount() {
    totalTime = totalTime - 1;
    $("#timeRemaining").text(totalTime);
    time = setTimeout(timedCount, 1000);

    if (totalTime === -1) {
        $(".container").css("display", "none");
        $("#answerID").css("display", "block");

    }
    $("#totalQuestion").text(totalQuestion);
    $("#correct").text(totalCorrect);
    $("#incorrect").text(totalIncorrect);
    $("#notanswered").text(unanswered);

}

$(document).ready(function () {
    //hide the whole container shows before clicking start button
    $("#questions").css("display", "none");
    $("#answerID").css("display", "none");

    //to display the container after clicking start button and hides the start button
    $("#start").click(function () {
        $("#questions").css("display", "block");
        $("#start").hide();
        timedCount();

    });

    $("input[name='1']").click(function () {
        //alert($('input:radio[name=1]:checked').val());
        if ($('input:radio[name=1]:checked').val() === "Gone With the Wind") {
            //alert("correct");
            totalCorrect = totalCorrect + 1;
        }
        else {
            totalIncorrect++;
        }
        console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
        unanswered = totalQuestion - totalCorrect - totalIncorrect;
    });

    $("input[name='2']").click(function () {
        //alert($('input:radio[name=2]:checked').val());
        if ($('input:radio[name=2]:checked').val() === "Tatum O'Neal") {
            //alert("correct");
            totalCorrect = totalCorrect + 1;
        }
        else {
            totalIncorrect++;
        }
        console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
        unanswered = totalQuestion - totalCorrect - totalIncorrect;

    });

    $("input[name='3']").click(function () {
        //alert($('input:radio[name=3]:checked').val());
        if ($('input:radio[name=3]:checked').val() === "Ben Hur") {
            //alert("correct");
            totalCorrect = totalCorrect + 1;
        }
        else {
            totalIncorrect++;
        }
        console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
        unanswered = totalQuestion - totalCorrect - totalIncorrect;

    });

    $("input[name='4']").click(function () {
        //alert($('input:radio[name=4]:checked').val());
        if ($('input:radio[name=4]:checked').val() === "8.5 lbs") {
            //alert("correct");
            totalCorrect = totalCorrect + 1;
        }
        else {
            totalIncorrect++;
        }
        console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
        unanswered = totalQuestion - totalCorrect - totalIncorrect;

    });

    $("input[name='5']").click(function () {
        //alert($('input:radio[name=5]:checked').val());
        if ($('input:radio[name=5]:checked').val() === "13.5 inches") {
            //alert("correct");
            totalCorrect = totalCorrect + 1;
        }
        else {
            totalIncorrect++;
        }
        console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
        unanswered = totalQuestion - totalCorrect - totalIncorrect;

    });

    $("input[name='6']").click(function () {
        //alert($('input:radio[name=6]:checked').val());
        if ($('input:radio[name=6]:checked').val() === "John Ford") {
            //alert("correct");
            totalCorrect = totalCorrect + 1;
        }
        else {
            totalIncorrect++;
        }
        console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
        unanswered = totalQuestion - totalCorrect - totalIncorrect;

    });




});


// $('input:radio[name=1]')[1].checked = true;
// $('input:radio[name=2]')[1].checked = true;
// $('input:radio[name=3]')[2].checked = true;
// $('input:radio[name=4]')[2].checked = true;
// $('input:radio[name=5]')[0].checked = true;
// $('input:radio[name=6]')[3].checked = true;



