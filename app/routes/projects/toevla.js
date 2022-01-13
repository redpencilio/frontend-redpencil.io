import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsToevlaRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Demo App';
  }
}
