import Route from '@ember/routing/route';

export default class ProjectsKaleidosRoute extends Route {
  breadCrumbs = [
    {
      label: "Projects",
      route: "projects"
    },
    {
      label: "Kaleidos",
      route: "projects.kaleidos"
    }
  ]
}
