import Route from '@ember/routing/route';

export default class EntitiesEntityIndexRoute extends Route {
  model() {
    return this.modelFor('entities.entity');
  }
}
