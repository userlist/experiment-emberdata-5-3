export default [
  {
    id: 'property_1',
    name: 'foo',
    description: 'Foo',
    entityId: { type: 'company', id: 'company_1' },
    propertyIds: ['property_2'],
  },
  {
    id: 'property_2',
    name: 'foo.bar',
    description: 'Bar',
    entityId: { type: 'company', id: 'company_1' },
    parentId: 'property_1',
    propertyIds: ['property_3'],
  },
  {
    id: 'property_3',
    name: 'foo.bar.baz',
    description: 'Baz',
    entityId: { type: 'company', id: 'company_1' },
    parentId: 'property_2',
  },
];
