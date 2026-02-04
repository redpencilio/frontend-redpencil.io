import EmberRouter from '@ember/routing/router';
import config from 'frontend-redpencil/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('who-we-are');
  this.route('projects', function () {
    this.route('lblod');
    this.route('kaleidos');
    this.route('toevla');
    this.route('transportdata');
  });
  this.route('services');
  this.route('data-portals');
  this.route('contact');
  this.route('careers', function () {
    this.route('full-stack-developer');
    this.route('linked-data-ontologist');
    this.route('internship');
  });
  this.route('not-found', { path: '/*' });
});
