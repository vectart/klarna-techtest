import Ember from 'ember';

export default Ember.Controller.extend({
  index: function () {
    return this.get('parentController').indexOf(this);
  }.property('parentController.@each'),

  prev: function () {
    var prevIndex = this.get('index') - 1;
    return this.get('parentController').objectAt(prevIndex);
  }.property('parentController.@each'),

  next: function () {
    var nextIndex = this.get('index') + 1;
    return this.get('parentController').objectAt(nextIndex);
  }.property('parentController.@each')
});
