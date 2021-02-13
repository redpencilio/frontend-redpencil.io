import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HeroCarouselComponent extends Component {

  @tracked index = 0;
  @tracked items = [0, 1, 2, 3]

  @action
  setIndex(position){
    this.index = position
  }
}
