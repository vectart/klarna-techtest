import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('dark-box', 'DarkBoxComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it has correct gray color', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();

  Ember.run.begin();
  component.set('length', 1);
  equal(component.get('style'), 'background-color: rgb(245, 245, 245)');

  component.set('length', 50);
  equal(component.get('style'), 'background-color: rgb(55, 55, 55)');
  Ember.run.end();
});
