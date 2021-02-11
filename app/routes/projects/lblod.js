import Route from '@ember/routing/route';

export default class ProjectsLblodRoute extends Route {
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
