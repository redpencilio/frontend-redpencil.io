import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return new Promise(resolve => setTimeout(resolve, 300))
  }
}
