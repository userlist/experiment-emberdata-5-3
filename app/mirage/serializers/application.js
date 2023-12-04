import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  typeKeyForModel(model) {
    return model.modelName;
  },
});
