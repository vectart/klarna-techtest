import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nice-box'],

  actions: {
    add: function () {
      this.sendAction('addAction', this.get('item'));
    },
    remove: function () {
      this.sendAction('removeAction', this.get('item'));
    }
  }
});
