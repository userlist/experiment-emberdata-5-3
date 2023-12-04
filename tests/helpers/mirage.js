import { settled } from '@ember/test-helpers';
import makeServer from 'experiment-emberdata-5-3/mirage/config';

export default function (hooks) {
  hooks.beforeEach(function () {
    this.server = makeServer(this.owner);

    if (location.search.indexOf('mirageLogging') !== -1) {
      this.server.logging = true;
    }
  });

  hooks.afterEach(async function () {
    return settled().then(() => {
      if (this.server) {
        this.server.shutdown();
        delete this.server;
      }
    });
  });
}
