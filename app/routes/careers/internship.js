import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CareersInternshipRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Careers | Internship ';
  }
}
