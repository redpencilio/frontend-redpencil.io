import Model, { attr, hasMany } from '@ember-data/model';

export default class MailFolderModel extends Model {
  @attr('string') title;
  @attr('string') description;
}
