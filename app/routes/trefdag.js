import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TrefdagRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'RPIO | Trefdag Vlaanderen Digitaal';
    // TODO(trefdag): decide after the event whether to keep this page and
    // whether it should be indexed. Remove this line to allow indexing.
    this.headData.noindex = true;
  }

  deactivate() {
    this.headData.noindex = false;
  }
}
