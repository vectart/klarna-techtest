import Ember from 'ember';

export function pluralizeWord(num, str) {
  if (num > 1) {
    return Ember.String.pluralize(str);
  }

  return str;
}

export default Ember.Handlebars.makeBoundHelper(pluralizeWord);
