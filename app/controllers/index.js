import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'item',

  deleted: 0,
  maxId: Ember.computed.max('model'),

  saveState: function () {
    var data = JSON.stringify(this.get('model'));
    localStorage.setItem('model', data);
  }.observes('@each'),

  actions: {
    add: function (item) {
      var nextIndex = item.get('index') + 1,
          nextId = this.get('maxId') + 1;

      this.insertAt(nextIndex, nextId);
    },
    remove: function (item) {
      this.incrementProperty('deleted');
      this.removeObject(item);
    }
  }
});
