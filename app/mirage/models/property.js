import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  entity: belongsTo('entity', { inverse: 'properties' }),
  parent: belongsTo('property', { inverse: 'children' }),
  properties: hasMany('property', { inverse: 'parent' }),
});
