import { modifier } from 'ember-modifier';

export default modifier(function focusOnInsert(element) {
  element.focus();
});
