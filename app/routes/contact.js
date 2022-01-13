import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'RPIO | Contact';
  }
}
