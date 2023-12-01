import { Model, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  entity: belongsTo('entity', { inverse: 'properties' }),
  parent: belongsTo('property', { inverse: 'children' }),
  children: hasMany('property', { inverse: 'parent' }),
});
