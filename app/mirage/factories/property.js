import { Factory } from 'miragejs';

export default Factory.extend({
  name(i) {
    return `Property ${i + 1}`;
  },
});
