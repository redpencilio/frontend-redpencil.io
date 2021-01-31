import Route from '@ember/routing/route';

export default class ProjectsToevlaRoute extends Route {
  breadCrumbs = [
    {
      label: "Projects",
      route: "projects"
    },
    {
      label: "ToeVla",
      route: "projects.toevla"
    }
  ]
}
