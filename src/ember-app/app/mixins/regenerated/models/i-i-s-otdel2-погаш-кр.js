import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видПогашКр: DS.attr('i-i-s-otdel2-вид-погаш-кр'),
  дата: DS.attr('date'),
  суммаПогашКр: DS.attr('number'),
  заклКрДог: DS.belongsTo('i-i-s-otdel2-закл-кр-дог', { inverse: null, async: false }),
  клиенты: DS.belongsTo('i-i-s-otdel2-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-otdel2-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  видПогашКр: {
    descriptionKey: 'models.i-i-s-otdel2-погаш-кр.validations.видПогашКр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-otdel2-погаш-кр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  суммаПогашКр: {
    descriptionKey: 'models.i-i-s-otdel2-погаш-кр.validations.суммаПогашКр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заклКрДог: {
    descriptionKey: 'models.i-i-s-otdel2-погаш-кр.validations.заклКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-otdel2-погаш-кр.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-otdel2-погаш-кр.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПогашКрE', 'i-i-s-otdel2-погаш-кр', {
    дата: attr('Дата', { index: 0 }),
    видПогашКр: attr('Вид погаш кр', { index: 1 }),
    суммаПогашКр: attr('Сумма погаш кр', { index: 2 }),
    заклКрДог: belongsTo('i-i-s-otdel2-закл-кр-дог', 'Закл кр дог', {
      цельКр: attr('Цель кр', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'цельКр' }),
    организация: belongsTo('i-i-s-otdel2-организация', 'Организация', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    клиенты: belongsTo('i-i-s-otdel2-клиенты', 'Клиенты', {
      фИОКлиента: attr('Ф и о клиента', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИОКлиента' })
  });

  modelClass.defineProjection('ПогашКрL', 'i-i-s-otdel2-погаш-кр', {
    дата: attr('Дата', { index: 0 }),
    организация: belongsTo('i-i-s-otdel2-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-otdel2-клиенты', 'Ф и о клиента', {
      фИОКлиента: attr('Ф и о клиента', { index: 2 })
    }, { index: -1, hidden: true }),
    видПогашКр: attr('Вид погаш кр', { index: 3 }),
    суммаПогашКр: attr('Сумма погаш кр', { index: 4 }),
    заклКрДог: belongsTo('i-i-s-otdel2-закл-кр-дог', '', {
      номерКрДог: attr('', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
