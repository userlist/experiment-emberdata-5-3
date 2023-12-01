export default [
  {
    id: 'property_1',
    name: 'foo',
    description: 'Foo',
    entityId: 'entity',
  },
  {
    id: 'property_2',
    name: 'foo.bar',
    description: 'Bar',
    entityId: 'entity',
    parentId: 'property_1',
  },
  {
    id: 'property_3',
    name: 'foo.bar.baz',
    description: 'Baz',
    entityId: 'entity',
    parentId: 'property_2',
  },
];
