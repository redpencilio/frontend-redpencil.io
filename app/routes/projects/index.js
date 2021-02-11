import Route from '@ember/routing/route';

export default class ProjectsIndexRoute extends Route {
  breadCrumbs = [
    {
      label: "Projects",
      route: "projects"
    }
  ]
}
