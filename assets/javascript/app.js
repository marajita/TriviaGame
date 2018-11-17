var totalTime = 5;
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
    $("#btnReset").css("display", "block");
    clearTimeout(time);
  }

  $("#totalQuestion").text(totalQuestion);
  $("#correct").text(totalCorrect);
  $("#incorrect").text(totalIncorrect);
  $("#notanswered").text(unanswered);
}

$(document).ready(function() {
  //hide the whole container shows before clicking start button
  $("#questions").css("display", "none");
  $("#answerID").css("display", "none");
  $("#btnReset").css("display", "none");

  //to display the container after clicking start button and hides the start button
  $("#start").click(function() {
    $("#questions").css("display", "block");
    $("#start").hide();
    timedCount();
  });

  $("#reset").click(function() {
    resetValue();
    $("#answerID").css("display", "none");
    $("#btnReset").css("display", "none");
    $("#start").show();
    $("input:radio").prop("checked", false); //to uncheck the radio button or reset answers
    unanswered = 6;
    totalIncorrect = 0;
  });

  function resetValue() {
    totalTime = 5;
  }

  function calculateUnanswered() {
    unanswered = totalQuestion - totalCorrect - totalIncorrect;
  }

  $("input[name='1']").click(function() {
    //alert($('input:radio[name=1]:checked').val());
    if ($("input:radio[name=1]:checked").val() === "Gone With the Wind") {
      //alert("correct");
      totalCorrect = totalCorrect + 1;
    } else {
      totalIncorrect++;
    }
    //console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
    calculateUnanswered();
  });

  $("input[name='2']").click(function() {
    //alert($('input:radio[name=2]:checked').val());
    if ($("input:radio[name=2]:checked").val() === "Tatum O'Neal") {
      //alert("correct");
      totalCorrect = totalCorrect + 1;
    } else {
      totalIncorrect++;
    }
    //console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
    calculateUnanswered();
  });

  $("input[name='3']").click(function() {
    //alert($('input:radio[name=3]:checked').val());
    if ($("input:radio[name=3]:checked").val() === "Ben Hur") {
      //alert("correct");
      totalCorrect = totalCorrect + 1;
    } else {
      totalIncorrect++;
    }
    //console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
    calculateUnanswered();
  });

  $("input[name='4']").click(function() {
    //alert($('input:radio[name=4]:checked').val());
    if ($("input:radio[name=4]:checked").val() === "8.5 lbs") {
      //alert("correct");
      totalCorrect = totalCorrect + 1;
    } else {
      totalIncorrect++;
    }
    //console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
    calculateUnanswered();
  });

  $("input[name='5']").click(function() {
    //alert($('input:radio[name=5]:checked').val());
    if ($("input:radio[name=5]:checked").val() === "13.5 inches") {
      //alert("correct");
      totalCorrect = totalCorrect + 1;
    } else {
      totalIncorrect++;
    }
    //console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
    calculateUnanswered();
  });

  $("input[name='6']").click(function() {
    //alert($('input:radio[name=6]:checked').val());
    if ($("input:radio[name=6]:checked").val() === "John Ford") {
      //alert("correct");
      totalCorrect = totalCorrect + 1;
    } else {
      totalIncorrect++;
    }
    //console.log("unanswered :" + (6 - totalCorrect - totalIncorrect));
    calculateUnanswered();
  });
});
