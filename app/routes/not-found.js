import Route from '@ember/routing/route';

export default class NotFoundRoute extends Route {
  breadCrumbs = [
    {
      label: "?",
      route: "index"
    }
  ]
}
