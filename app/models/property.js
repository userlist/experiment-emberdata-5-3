import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PropertyModel extends Model {
  @attr('string') name;

  @belongsTo('entity', {
    async: false,
    polymorphic: true,
    inverse: 'properties',
    as: 'property',
  })
  entity;

  @belongsTo('property', { inverse: 'properties', async: false }) parent;
  @hasMany('property', { inverse: 'parent', async: false }) properties;

  get isCustomProperty() {
    return this.name.startsWith('properties.');
  }

  get isPublicProperty() {
    return !this.entity.privatePropertyNames.includes(this.name);
  }

  get isProtectedProperty() {
    return this.entity.protectedPropertyNames.includes(this.name);
  }
}
