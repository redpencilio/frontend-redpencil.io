import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {

  @tracked active = false;

  @action toggleActive(state){
    if(typeof state == String){
      this.active = state
    } else {
      this.active = !this.active
    }
  }
}
