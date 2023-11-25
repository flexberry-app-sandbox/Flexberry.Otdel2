import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  кПП: DS.attr('number'),
  местоРаботы: DS.attr('string'),
  номКрДог: DS.attr('number'),
  расчСчет: DS.attr('number'),
  стажРаботы: DS.attr('number'),
  телефон: DS.attr('number'),
  фактАдрес: DS.attr('string'),
  фИОКлиента: DS.attr('string'),
  юрАдрес: DS.attr('string')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  местоРаботы: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.местоРаботы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номКрДог: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.номКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расчСчет: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.расчСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стажРаботы: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.стажРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фактАдрес: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.фактАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОКлиента: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.фИОКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  юрАдрес: {
    descriptionKey: 'models.i-i-s-otdel2-клиенты.validations.юрАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-otdel2-клиенты', {
    фИОКлиента: attr('Ф и о клиента', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    кПП: attr('КПП', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    местоРаботы: attr('Место работы', { index: 4 }),
    юрАдрес: attr('Юр адрес', { index: 5 }),
    фактАдрес: attr('Факт адрес', { index: 6 }),
    стажРаботы: attr('Стаж работы', { index: 7 }),
    номКрДог: attr('Ном кр дог', { index: 8 }),
    расчСчет: attr('Расч счет', { index: 9 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-otdel2-клиенты', {
    фИОКлиента: attr('Ф и о клиента', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    кПП: attr('КПП', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    местоРаботы: attr('Место работы', { index: 4 }),
    юрАдрес: attr('Юр адрес', { index: 5 }),
    фактАдрес: attr('Факт адрес', { index: 6 }),
    стажРаботы: attr('Стаж работы', { index: 7 }),
    номКрДог: attr('Ном кр дог', { index: 8 }),
    расчСчет: attr('Расч счет', { index: 9 })
  });
};
