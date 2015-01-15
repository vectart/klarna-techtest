import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],
  itemController: 'item',

  deleted: 0,
  maxId: Ember.computed.max('model'),

  hasHovered: function(){
    return this.get('controllers.application.isPointer') && this.anyBy('isHovered');
  }.property('@each.isHovered', 'controllers.application.isPointer'),

  saveState: function () {
    var data = JSON.stringify(this.get('model'));
    localStorage.setItem('model', data);
  }.observes('@each'),

  rememberDeleted: function(obj, start, removeCount){
    if (removeCount > 0) {
      this.incrementProperty('deleted', removeCount);
    }
  }.on('@array:change'),

  actions: {
    add: function (item) {
      var nextIndex = item.get('index') + 1,
          nextId = this.get('maxId') + 1;

      this.insertAt(nextIndex, nextId);
    },
    remove: function (item) {
      this.removeObject(item);
    }
  }
});
