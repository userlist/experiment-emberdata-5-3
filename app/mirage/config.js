import { createServer } from 'miragejs';
import models from './models';
import factories from './factories';
import fixtures from './fixtures';
import serializers from './serializers';
import routes from './routes';

export default function makeServer(owner) {
  let { environment } = owner.resolveRegistration('config:environment');

  return createServer({
    environment,
    models,
    serializers,
    factories,
    fixtures,
    routes,
  });
}
