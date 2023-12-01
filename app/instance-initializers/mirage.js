import makeServer from '../mirage/config';

function initialize(instance) {
  let server = makeServer(instance);
  server.loadFixtures();
}

export default {
  initialize,
};
