window.onload = function() {
  var questions = [
    {
      name: 'q1',
      description: 'Question 1',
      options: [
        { title: 'option 1', correct: true, },
        { title: 'option 2', },
        { title: 'option 3', },
      ]
    },
    {
      name: 'q5',
      description: 'Question 2',
      options: [
        { title: 'option 1', },
        { title: 'option 2', },
        { title: 'option 3', correct: true, },
      ]
    },
    {
      name: 'q7',
      description: 'Question 3',
      options: [
        { title: 'option 1', },
        { title: 'option 2', correct: true, },
        { title: 'option 3', },
      ]
    },
  ];
  
  var $app = document.getElementById('app');

  Test.render($app, questions);
  
  var button = document.createElement('button');
  button.innerHTML = 'Test';
  
  button.addEventListener('click', function(){
    var answered = Test.check();
    
    alert('You answered on ' + answered.length + ' questions.\n' + answered.join('\n'));
  });

  $app.appendChild(button);
};
