
var timer = $("#timer");
 var correct=0;
 var wrong=0;
var interval= '';
var time = 10;

interval = setInterval(function(){
  time--;
  timer.text("Your time is " + time);

  if(time === 0){
    stopTimer();
    $('#correct').text('correct: ' + correct)
    $('#wrong').text('wrong: ' + wrong)
  }
},1000)


function stopTimer(){
clearInterval(interval)
}

$('.question').on('click', function(){
var questionAnswer = $(this).attr('data-q');
var correctAnswer = $(this).attr('data-answer');

if(questionAnswer === correctAnswer){
  correct++;
}else{
  wrong++;
}


 })


