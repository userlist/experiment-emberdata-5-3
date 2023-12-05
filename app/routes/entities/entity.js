import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EntitiesEntityRoute extends Route {
  @service store;

  model({ entity_id }) {
    return this.store.findRecord('entity', entity_id);
  }
}
