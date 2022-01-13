import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CareersFullStackDeveloperRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Careers | Full Stack Web Developer';
  }
}
