function submitAnswers () {
  var total = 5;
  var score = 0;

  //Correct answers
  var answers = ['a','b','c','b','a'];  

  //Validation
  for (var i = 1; i <= total; i++) {
    var q = document.getElementById('quizForm')['q'+i].value;
    if(q == '' || q  == null){
      alert('Please answer all questions!');
      return false;
    }
    (q == answers[i-1])?score++:score+=0;
  }


  //Display final score
  document.getElementById('result').innerHTML = '<h2>You scored '+score+' out of '+total+'</h2>';

  return false;
}