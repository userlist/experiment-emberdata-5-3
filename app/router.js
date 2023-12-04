import EmberRouter from '@ember/routing/router';
import config from 'experiment-emberdata-5-3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('entities', { path: '/' }, function () {
    this.route('entity', { path: '/:entity_id' }, function () {
      this.route('property', { path: '/properties/:property_id' });
    });
  });
});
