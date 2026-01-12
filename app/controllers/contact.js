import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import ENV from 'frontend-redpencil/config/environment';

export default class ContactController extends Controller {
  @service store;
  @tracked name;
  @tracked email;
  @tracked phone;
  @tracked message;
  @tracked showNotification = false;
  @tracked success = false;

  @action
  async sendEmail(e) {
    e.preventDefault();
    this.showNotification = false;

    try {
      const newEmail = this.store.createRecord('email', {
        to: 'meettheteam@redpencil.io',
        subject: 'New form submission (rpio-website)',
        from: ENV.mail.fromAddress,
        content: `
            name: ${this.name}
            email: ${this.email}
            phone: ${this.phone}
            message: ${this.message}
          `,
        folder: 'http://semantic.works/id/mail-folders/2',
      });
      await newEmail.save();
      this.clearFields();

      this.success = true;
      this.showNotification = true;
    } catch (err) {
      this.showNotification = true;
      this.success = false;
    }
  }

  clearFields() {
    this.email = '';
    this.phone = '';
    this.message = '';
  }

  @action
  close() {
    this.showNotification = false;
  }
}
