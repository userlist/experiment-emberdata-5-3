export default function () {
  this.namespace = '/api';

  this.resource('entities', { path: '/entities' });
  this.resource('properties', { path: '/entities/:entity_id/properties' });
}
