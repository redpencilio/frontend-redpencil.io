import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsKaleidosRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'RPIO | Kaleidos';
  }
}
