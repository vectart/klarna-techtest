import Ember from 'ember';

export default Ember.Controller.extend({
  isTouch: function () {
    return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
  }.property(),

  isPointer: Ember.computed.not('isTouch')
});
