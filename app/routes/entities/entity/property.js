import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EntitiesEntityPropertyRoute extends Route {
  @service store;

  model({ property_id }) {
    let { entity_id } = this.paramsFor('entities.entity');

    return this.store.findRecord('property', property_id, {
      reload: true,
      preload: { entity_id },
      include: 'entity,parent,properties',
    });
  }
}
