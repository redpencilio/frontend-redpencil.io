import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Creating excellent applications, better data, and proudly building the #WebWeWant';
  }
}
