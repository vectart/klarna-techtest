import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    if (localStorage) {
      var data = localStorage.getItem('model');

      if (data) {
        return JSON.parse(data);
      }
    }

    return [1, 2, 3, 4, 5, 10, 6, 8, 9];
  }
});
