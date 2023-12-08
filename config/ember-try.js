module.exports = {
  useYarn: true,
  scenarios: [
    {
      name: 'Ember-data 5.2.0',
      npm: {
        devDependencies: {
          'ember-data': '5.2.0',
        },
      },
    },
    {
      name: 'Ember-data 5.3.0',
      npm: {
        devDependencies: {
          'ember-data': '5.3.0',
        },
      },
    },
  ],
};
