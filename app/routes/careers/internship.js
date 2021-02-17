import Route from '@ember/routing/route';

export default class CareersInternshipRoute extends Route {
  breadCrumbs = [
    {
      label: "Careers",
      route: "careers"
    },
    {
      label: "Internship",
      route: "careers.internship"
    }
  ]
}
