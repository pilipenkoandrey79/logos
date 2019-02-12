;var Test = (function(){
  var template =
    '<% for (var i in questions) { %>' +
    '<% var question = questions[i] %>' +
    '<p><%- question.description %>' +
      '<% for (var j in question.options) { %>' +
        '<% var option = question.options[j] %>' +
        '<label>' +
          '<%- option.title %>' +
          '<input type="radio" name="<%- question.name %>" value="<%- j %>">' +
        '</label>' +
      '<% } %>' +
      '</p>' +
    '<% } %>';

  var state = [];

  return {
    render: function($root, description) {
      $root.innerHTML = _.template(template)({ questions: description});

      state = description.map(function(question) {
        var q = {
          description: question.description,
          name: question.name,
          checked: -1,
          correctOption: -1,
        };
        
        for (var i in question.options) {
          if (question.options[i].correct) {
            q.correctOption = i;

            break;
          }
        }

        return q;
      });

      $root.querySelectorAll('input[type="radio"]').forEach(function(input) {
        input.addEventListener('click', function(event){
          state.find(function(item) {
            return item.name === event.target.name;
          }).checked = event.target.value;

          console.log(state);
        });
      });
    },

    check: function() {
      return state.reduce(function(list, question) {
        if (question.checked === question.correctOption) {
          list.push(question.description);
        }

        return list;
      }, []);
    }
  }
})();
