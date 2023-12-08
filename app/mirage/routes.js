export default function () {
  this.namespace = '/api';

  this.resource('entities', { path: '/entities' });
  this.resource('properties', { path: '/entities/:entity_id/properties' });

  this.get('/entities', (schema) => {
    let entities = schema.entities.all();
    let users = schema.users.all();
    let companies = schema.companies.all();
    let events = schema.events.all();

    entities.models = [
      ...entities.models,
      ...users.models,
      ...companies.models,
      ...events.models,
    ];

    return entities;
  });

  this.get('/entities/:entity_id', (schema, request) => {
    let { entity_id } = request.params;
    let entityTypes = ['entities', 'users', 'companies', 'events'];

    for (let entityType of entityTypes) {
      let entity = schema[entityType].find(entity_id);
      if (entity) return entity;
    }

    return new Response(401, {}, {});
  });
}
