import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ServicesRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'RPIO | Services';
  }

  breadCrumbs = [
    {
      label: "Services",
      route: "services"
    }
  ]
}
