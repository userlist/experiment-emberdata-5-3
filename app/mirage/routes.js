export default function () {
  this.namespace = '/api';

  this.resources('entities', { path: '/entities' });
  this.resources('properties', { path: '/properties' });
}
