import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model({ entity_id }) {
    return this.store.findRecord('entity', entity_id);
  }
}
