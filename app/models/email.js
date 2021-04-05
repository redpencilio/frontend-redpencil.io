import Model, { attr } from '@ember-data/model';

export default class EmailModel extends Model {
  @attr('string') subject;
  @attr('string') from;
  @attr('string') to;
  @attr('string') content;
  @attr('string') folder;
}
