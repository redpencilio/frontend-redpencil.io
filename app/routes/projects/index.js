import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsIndexRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'RPIO | Projects';
  }

  breadCrumbs = [
    {
      label: 'Projects',
      route: 'projects',
    },
  ];
}
