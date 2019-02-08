;
var TestOption = core.define(
  null,

  function($root, description) {
    this.$root = $root;
    this.description = description;

    this.template =
      '<label>'+
        '<%- title %>'+
        '<input type="radio" name="q<%- index %>" value="<%- index %>">'+
      '</label>';
  },
  
  {
    render: function() {
      var optionMarkup = _.template(this.template)({
        title: this.description.title,
        index: this.description.value
      });

      this.$root.innerHTML += optionMarkup;

      return this;
    },

    isChecked: function() {
      return this.$el.checked;
    }
  }
);
