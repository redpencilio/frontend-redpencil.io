import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsLblodRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Projects | LBLOD';
  }
  breadCrumbs = [
    {
      label: "Projects",
      route: "projects"
    },
    {
      label: "LBLOD",
      route: "projects.lblod"
    }
  ]
}
