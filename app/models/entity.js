import Model, { attr, hasMany } from '@ember-data/model';

export default class EntityModel extends Model {
  @attr('string') name;

  @hasMany('property', { async: true, inverse: 'entity', as: 'entity' })
  properties;

  get privatePropertyNames() {
    return ['properties'];
  }

  get protectedPropertyNames() {
    return [...this.privatePropertyNames, 'created_at', 'updated_at'];
  }
}
