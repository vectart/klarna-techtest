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
      var ghost = this.$().clone()
              .addClass('ghost')
              .css(this.$().offset())
              .width(this.$().width())
              .appendTo('body');

      Ember.run.later(ghost.addClass.bind(ghost, 'fly'), 10);
      Ember.run.later(ghost.remove.bind(ghost), 410);
      this.sendAction('removeAction', this.get('item'));
    }
  }
});
