import ApplicationAdapter from './application';

export default class PropertyAdapter extends ApplicationAdapter {
  buildURL(modelName, id, snapshot) {
    let url = [];
    let prefix = this.urlPrefix();

    if (snapshot) {
      let entityId = snapshot.belongsTo('entity', { id: true });
      url.push(this.segmentForType('entity', entityId));
    }

    url.push(this.segmentForType(modelName, id));

    if (prefix) {
      url.unshift(`/${prefix}`);
    }

    return url.join('/');
  }

  segmentForType(modelName, id) {
    let segment = [];

    if (modelName) {
      let path = this.pathForType(modelName);
      if (path) {
        segment.push(path);
      }
    }

    if (id) {
      segment.push(encodeURIComponent(id));
    }

    return segment.join('/');
  }

  pathForType(modelName) {
    if (modelName == 'property') {
      return 'properties';
    }

    if (modelName == 'entity') {
      return 'entities';
    }

    return super.pathForType(...arguments);
  }
}
