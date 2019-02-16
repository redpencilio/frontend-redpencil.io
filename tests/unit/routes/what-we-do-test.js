import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | what-we-do', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:what-we-do');
    assert.ok(route);
  });
});
