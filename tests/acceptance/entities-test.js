import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'experiment-emberdata-5-3/tests/helpers';
import setupMirage from 'experiment-emberdata-5-3/tests/helpers/mirage';

module('Acceptance | entities', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('navigates down the properties tree', async function (assert) {
    let entity = this.server.create('entity');
    let property1 = this.server.create('property', { entity });
    let property2 = this.server.create('property', {
      entity,
      parent: property1,
    });
    this.server.create('property', { entity, parent: property2 });

    await visit('/');

    await click('[data-test-entity="1"]');
    await click('[data-test-property="1"]');
    await click('[data-test-property="2"]');
    await click('[data-test-property="3"]');

    assert.strictEqual(currentURL(), '/1/properties/3');
    assert
      .dom('[data-test-property]')
      .hasText('Property 3', 'Navigated to property 3');
  });

  test('navigates up the properties tree', async function (assert) {
    let entity = this.server.create('entity');
    let property1 = this.server.create('property', { entity });
    let property2 = this.server.create('property', {
      entity,
      parent: property1,
    });
    this.server.create('property', { entity, parent: property2 });

    await visit('/1/properties/3');

    await click('[data-test-link-back]');
    await click('[data-test-link-back]');
    await click('[data-test-link-back]');

    assert.strictEqual(currentURL(), '/1');
    assert
      .dom('[data-test-entity]')
      .hasText('Entity 1', 'Navigated to entity 1');
  });
});
