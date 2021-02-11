import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
  breadCrumbs = [
    {
      label: "Contact",
      route: "contact"
    }
  ]
}
