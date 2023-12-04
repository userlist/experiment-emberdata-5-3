import makeServer from '../mirage/config';

function initialize(instance) {
  makeServer(instance);
}

export default {
  initialize,
};
