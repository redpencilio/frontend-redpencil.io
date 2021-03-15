import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class HeroCarouselComponent extends Component {
  @service fastboot;

  @tracked index = 0;
  @tracked items = [0, 1, 2, 3];
  @tracked intervalId;

  constructor() {
    super(...arguments);
    if (!this.fastboot.isFastBoot) {
      this.loopIndex();
    }
  }

  @action
  setIndex(position) {
    this.index = position;
    clearInterval(this.intervalId);
    this.loopIndex();
  }

  loopIndex() {
    const nextIndex = () => {
      this.index = (this.index + 1) % this.items.length;
    };
    this.intervalId = setInterval(nextIndex, 7000);
  }
}
