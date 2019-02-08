window.onload = function() {
  var questions = [
    {
      description: 'Question 1',
      options: [
        { title: 'option 1', correct: true, },
        { title: 'option 2', },
        { title: 'option 3', },
      ]
    },
    {
      description: 'Question 2',
      options: [
        { title: 'option 1', },
        { title: 'option 2', },
        { title: 'option 3', correct: true, },
      ]
    },
    {
      description: 'Question 3',
      options: [
        { title: 'option 1', },
        { title: 'option 2', correct: true, },
        { title: 'option 3', },
      ]
    },
  ];
  
  function checkTest() {
    var correctQuestions = [];
    
    test.forEach(function(question){
      if (question.check()) {
        correctQuestions.push(question.getQuestion());
      }
    });
    
    alert('You answered right on questions:\n\n' + correctQuestions.join('\n'));
  }

  var test = questions.map(function(question, index){
    return (new TestQuestion(document.getElementById('app'), question, index)).render();
  });
  
  var button = document.createElement('button');
  button.innerHTML = 'Test';
  button.addEventListener('click', checkTest);
  document.getElementById('app').appendChild(button);
};
