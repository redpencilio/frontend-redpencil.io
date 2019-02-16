import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('what-we-do');
  this.route('who');
  this.route('inspiration');
  this.route('technologies');
});

export default Router;
