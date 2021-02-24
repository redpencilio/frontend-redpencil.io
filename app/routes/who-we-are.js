import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WhoWeAreRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'RPIO | Who we are';
  }

  breadCrumbs = [
    {
      label: "Who we are",
      route: "who-we-are"
    }
  ]
}
