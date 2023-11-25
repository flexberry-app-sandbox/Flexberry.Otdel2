import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доходыВМес: DS.attr('number'),
  наличЗал: DS.attr('boolean'),
  наличПоруч: DS.attr('boolean'),
  одобрение: DS.attr('boolean'),
  суммаЕжКр: DS.attr('number'),
  заклКрДог: DS.belongsTo('i-i-s-otdel2-закл-кр-дог', { inverse: null, async: false }),
  клиенты: DS.belongsTo('i-i-s-otdel2-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-otdel2-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доходыВМес: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.доходыВМес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наличЗал: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.наличЗал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наличПоруч: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.наличПоруч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  одобрение: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.одобрение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаЕжКр: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.суммаЕжКр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заклКрДог: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.заклКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-otdel2-проверка-кр-кл.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаКрКлE', 'i-i-s-otdel2-проверка-кр-кл', {
    дата: attr('Дата', { index: 0 }),
    доходыВМес: attr('Доходы в мес', { index: 1 }),
    суммаЕжКр: attr('Сумма еж кр', { index: 2 }),
    наличЗал: attr('Налич зал', { index: 3 }),
    наличПоруч: attr('Налич поруч', { index: 4 }),
    одобрение: attr('Одобрение', { index: 5 }),
    организация: belongsTo('i-i-s-otdel2-организация', 'Организация', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    заклКрДог: belongsTo('i-i-s-otdel2-закл-кр-дог', 'Закл кр дог', {
      цельКр: attr('Цель кр', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'цельКр' }),
    клиенты: belongsTo('i-i-s-otdel2-клиенты', 'Клиенты', {
      фИОКлиента: attr('Ф и о клиента', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'фИОКлиента' })
  });

  modelClass.defineProjection('ПроверкаКрКлL', 'i-i-s-otdel2-проверка-кр-кл', {
    дата: attr('Дата', { index: 0 }),
    организация: belongsTo('i-i-s-otdel2-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-otdel2-клиенты', 'Ф и о клиента', {
      фИОКлиента: attr('Ф и о клиента', { index: 2 })
    }, { index: -1, hidden: true }),
    заклКрДог: belongsTo('i-i-s-otdel2-закл-кр-дог', '', {
      суммаКредита: attr('', { index: 3 })
    }, { index: -1, hidden: true }),
    доходыВМес: attr('Доходы в мес', { index: 4 }),
    суммаЕжКр: attr('Сумма еж кр', { index: 5 }),
    наличЗал: attr('Налич зал', { index: 6 }),
    наличПоруч: attr('Налич поруч', { index: 7 }),
    одобрение: attr('Одобрение', { index: 8 })
  });
};
