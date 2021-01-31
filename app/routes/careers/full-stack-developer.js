import Route from '@ember/routing/route';

export default class CareersFullStackDeveloperRoute extends Route {
  breadCrumbs = [
    {
      label: "Careers",
      route: "careers"
    },
    {
      label: "Full Stack Web Developer",
      route: "careers.full-stack-developer"
    }
  ]
}
