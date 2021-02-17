import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HeroCarouselComponent extends Component {

  @tracked index = 0;
  @tracked items = [0, 1, 2, 3, 4]

  constructor(){
    super(...arguments);
    this.loopIndex()
  }

  @action
  setIndex(position){
    this.index = position
  }

  loopIndex(){
    const nextIndex = () => {
      this.index = (this.index + 1) % this.items.length
    }
    setInterval(nextIndex, 7000);
  }
}
