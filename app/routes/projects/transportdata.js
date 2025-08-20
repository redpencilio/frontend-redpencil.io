import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsTransportdataRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Projects | Transportdata.be';
  }
}