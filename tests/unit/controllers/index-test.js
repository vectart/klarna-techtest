import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', 'IndexController', {
  // Specify the other units that are required for this test.
  needs: ['controller:application', 'controller:item']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('remembers number of deleted items', function() {
  var controller = this.subject();
  controller.set('model', [1, 2, 3]);
  Ember.run.begin();
  controller.send('remove', controller.get('firstObject'));
  controller.send('remove', controller.get('lastObject'));
  Ember.run.end();
  equal(controller.get('length'), 1);
  equal(controller.get('deleted'), 2);
});
