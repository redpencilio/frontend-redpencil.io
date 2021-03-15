import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service router;
  @tracked active = false;

  constructor() {
    super(...arguments);
    this.router.on('routeWillChange', this.closeMobileMenu);
  }

  willDestroy(...args) {
    super.willDestroy(...args);

    this.router.off('routeWillChange', this.closeMobileMenu);
  }

  @action closeMobileMenu() {
    this.active = false;
  }

  @action toggleActive() {
    this.active = !this.active;
  }
}
