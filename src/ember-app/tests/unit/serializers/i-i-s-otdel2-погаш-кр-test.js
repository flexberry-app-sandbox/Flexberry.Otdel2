import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel2-погаш-кр', 'Unit | Serializer | i-i-s-otdel2-погаш-кр', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otdel2-погаш-кр',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otdel2-вид-кредита',
    'transform:i-i-s-otdel2-вид-погаш-кр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
