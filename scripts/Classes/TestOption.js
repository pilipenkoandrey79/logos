;
var TestOption = core.define(
  null,

  function($root, description) {
    this.$root = $root;
    this.description = description;
  },
  
  {
    render: function() {
      var label = document.createElement('label');

      var attrs = {
        type: 'radio',
        name: this.description.name,
        value: this.description.value,
      }

      this.$el = document.createElement('input');
      label.innerHTML = this.description.title;

      Object.keys(attrs).forEach(function(attr) {
        this.$el.setAttribute(attr, attrs[attr]);
      }.bind(this));

      label.appendChild(this.$el);
      this.$root.appendChild(label);

      return this;
    },

    isChecked: function() {
      return this.$el.checked;
    }
  }
);
