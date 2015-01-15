import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  style: function () {
    var rate = Math.min(this.get('length') / 20, 1),
        darkness = 255 - (rate * 200);

    return 'background-color: rgb(' + darkness + ', ' + darkness + ', ' + darkness + ')';
  }.property('length')
});
