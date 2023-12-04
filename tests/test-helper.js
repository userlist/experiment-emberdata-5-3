import Application from 'experiment-emberdata-5-3/app';
import config from 'experiment-emberdata-5-3/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

QUnit.config.urlConfig.push({
  id: 'mirageLogging',
  label: 'Mirage logging',
});

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
