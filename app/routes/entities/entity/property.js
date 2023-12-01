import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model({ property_id }) {
    return this.store.findRecord('property', property_id);
  }
}
