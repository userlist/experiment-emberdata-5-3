import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  entity: belongsTo('entity', { polymorphic: true, inverse: 'properties' }),
  parent: belongsTo('property', { inverse: 'properties' }),
  properties: hasMany('property', { inverse: 'parent' }),
});
