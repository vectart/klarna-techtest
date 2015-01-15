import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nice-box'],

  hasHover: function(){
    var item = this.get('item');
    this.$('div').hover(item.toggleProperty.bind(item, 'isHovered'));
  }.on('didInsertElement'),

  actions: {
    add: function () {
      this.sendAction('addAction', this.get('item'));
    },
    remove: function () {
      this.sendAction('removeAction', this.get('item'));
    }
  }
});
