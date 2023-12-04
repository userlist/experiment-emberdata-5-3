import { Factory } from 'miragejs';

export default Factory.extend({
  name(i) {
    return `Entity ${i + 1}`;
  },
});
