import Ember from 'ember';

export default Ember.View.extend({
  classNameBindings: ['controller.isTouch', 'controller.isPointer']
});
