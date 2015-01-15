import Ember from 'ember';

export function pluralizeWord(num, str) {
  if (str && num > 1) {
    return Ember.String.pluralize(str);
  }

  return str;
}

export default Ember.Handlebars.makeBoundHelper(pluralizeWord);
