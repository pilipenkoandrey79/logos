;
var TestQuestion = core.define(
  null,

  function($root, question, number) {
    this.$root = $root;
    this.question = question;
    this.number = number;
    this.$el = null;
    this.correctOption = null;
    this.options = [];
  },
  
  {
    createOption: function(configs) {
      var option = {};

      try {
        option = new TestOption(this.$el, configs);
      } catch(error) {
        console.error(error.message);
        
        return null;
      }

      return option.render();
    },

    getQuestion: function() {
      return this.question.description;
    },

    render: function() {
      this.$el = document.createElement('p');
      this.$el.innerHTML = this.question.description;
      var correctOptionIndex = null;

      this.options = this.question.options.map(function(option, index){
        var configs = option;
        configs.name = 'q' + this.number;
        configs.value = index;

        if (option.correct) {
          correctOptionIndex = index;
        }

        return this.createOption(configs);
      }.bind(this));

      this.correctOption = correctOptionIndex;
      this.$root.appendChild(this.$el);

      return this;
    },

    check: function() {
    	var checkedOption;
      
    	this.options.forEach(function(option, index){
    		if (option.isChecked()) {
    			checkedOption = index;
    			return;
    		}
    	});
      
    	return checkedOption === this.correctOption;
    }
  }
);
