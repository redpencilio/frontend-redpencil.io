import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BreadcrumbsComponent extends Component {
  @service router;
  
  @tracked breadCrumbs 

  constructor(){
    super(...arguments);
    const currentRoute = getOwner(this).lookup(`route:${this.router.currentRoute.name}`)
    this.breadCrumbs = currentRoute.breadCrumbs
  }
}
