import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  alwaysIncludeLinkageData: true,

  typeKeyForModel(model) {
    return model.modelName;
  },
});
