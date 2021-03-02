import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service router;
  @tracked active = false;
  @tracked currentRoute = this.router.currentRouteName;

  constructor(){
    super(...arguments);
    this.router.addObserver('currentRoute', () => {
      this.toggleActive("false");
    });
  }

  @action toggleActive(state){
    if(state == "false"){
      this.active = false;
    } else {
      this.active = !this.active;
    }
  }
}
