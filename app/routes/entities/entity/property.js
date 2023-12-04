import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EntitiesEntityPropertyRoute extends Route {
  @service store;

  model({ property_id }) {
    return this.store.findRecord('property', property_id, {
      include: 'entity,parent,properties',
    });
  }
}
