import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel2-сотрудники', 'Unit | Model | i-i-s-otdel2-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otdel2-должности',
    'model:i-i-s-otdel2-закл-кр-дог',
    'model:i-i-s-otdel2-клиенты',
    'model:i-i-s-otdel2-организация',
    'model:i-i-s-otdel2-отдел-кр',
    'model:i-i-s-otdel2-погаш-кр',
    'model:i-i-s-otdel2-проверка-кр-кл',
    'model:i-i-s-otdel2-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
