import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service router;
  @tracked isOpenMenu = false;

  @tracked isOpenMenu = false;

  constructor() {
    super(...arguments);
    this.router.on('routeWillChange', this.closeMobileMenu);
  }

  willDestroy(...args) {
    super.willDestroy(...args);
    this.router.off('routeWillChange', this.closeMobileMenu);
  }

  @action closeMobileMenu() {
    this.isOpenMenu = false;
  }

  @action toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
