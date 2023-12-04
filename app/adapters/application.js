import JSONAPISerializer from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPISerializer {
  namespace = 'api';
}
