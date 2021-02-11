import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service router;
  @tracked inTransition;

  constructor(){
    super(...arguments);
    this.router.on('routeWillChange', (transition) => {
      this.inTransition = true
    })
    this.router.on('routeDidChange', (transition) => {
      this.inTransition = false
    })
  }
}
