import Route from '@ember/routing/route';

export default class CareersIndexRoute extends Route {
  breadCrumbs = [
    {
      label: "Careers",
      route: "careers"
    }
  ]
}
