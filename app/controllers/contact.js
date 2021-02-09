import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactController extends Controller {

  @tracked name;
  @tracked email;
  @tracked phone;
  @tracked message;

  @action
    async sendEmail(e) {
      e.preventDefault()
      const mailFolder = await this.store.findRecord('mail-folder', "786a8cb0-4452-40f5-b8d8-046dd2d63281")
      const newEmail = this.store.createRecord('email', {
        to: "meettheteam@redpencil.io",
        subject: "New form submission (rpio-website)",
        from: "meettheteam@redpencil.io",
        content: `
          name: ${this.name}
          email: ${this.email}
          phone: ${this.phone}
          message: ${this.message}
        `,
        folder: mailFolder
      })

      newEmail.save()


    }
}
