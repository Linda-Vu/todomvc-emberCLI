import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', {}, function() {
    this.route('top-level-route', {resetNamespace: true});
  });
});

export default Router;
