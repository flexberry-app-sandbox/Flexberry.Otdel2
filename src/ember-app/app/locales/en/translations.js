import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtdel2ДолжностиLForm from './forms/i-i-s-otdel2-должности-l';
import IISOtdel2ЗаклКрДогLForm from './forms/i-i-s-otdel2-закл-кр-дог-l';
import IISOtdel2КлиентыLForm from './forms/i-i-s-otdel2-клиенты-l';
import IISOtdel2ОрганизацияLForm from './forms/i-i-s-otdel2-организация-l';
import IISOtdel2ОтделКрLForm from './forms/i-i-s-otdel2-отдел-кр-l';
import IISOtdel2ПогашКрLForm from './forms/i-i-s-otdel2-погаш-кр-l';
import IISOtdel2ПроверкаКрКлLForm from './forms/i-i-s-otdel2-проверка-кр-кл-l';
import IISOtdel2СотрудникиLForm from './forms/i-i-s-otdel2-сотрудники-l';
import IISOtdel2ДолжностиEForm from './forms/i-i-s-otdel2-должности-e';
import IISOtdel2ЗаклКрДогEForm from './forms/i-i-s-otdel2-закл-кр-дог-e';
import IISOtdel2КлиентыEForm from './forms/i-i-s-otdel2-клиенты-e';
import IISOtdel2ОрганизацияEForm from './forms/i-i-s-otdel2-организация-e';
import IISOtdel2ОтделКрEForm from './forms/i-i-s-otdel2-отдел-кр-e';
import IISOtdel2ПогашКрEForm from './forms/i-i-s-otdel2-погаш-кр-e';
import IISOtdel2ПроверкаКрКлEForm from './forms/i-i-s-otdel2-проверка-кр-кл-e';
import IISOtdel2СотрудникиEForm from './forms/i-i-s-otdel2-сотрудники-e';
import IISOtdel2ДолжностиModel from './models/i-i-s-otdel2-должности';
import IISOtdel2ЗаклКрДогModel from './models/i-i-s-otdel2-закл-кр-дог';
import IISOtdel2КлиентыModel from './models/i-i-s-otdel2-клиенты';
import IISOtdel2ОрганизацияModel from './models/i-i-s-otdel2-организация';
import IISOtdel2ОтделКрModel from './models/i-i-s-otdel2-отдел-кр';
import IISOtdel2ПогашКрModel from './models/i-i-s-otdel2-погаш-кр';
import IISOtdel2ПроверкаКрКлModel from './models/i-i-s-otdel2-проверка-кр-кл';
import IISOtdel2СотрудникиModel from './models/i-i-s-otdel2-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otdel2-должности': IISOtdel2ДолжностиModel,
    'i-i-s-otdel2-закл-кр-дог': IISOtdel2ЗаклКрДогModel,
    'i-i-s-otdel2-клиенты': IISOtdel2КлиентыModel,
    'i-i-s-otdel2-организация': IISOtdel2ОрганизацияModel,
    'i-i-s-otdel2-отдел-кр': IISOtdel2ОтделКрModel,
    'i-i-s-otdel2-погаш-кр': IISOtdel2ПогашКрModel,
    'i-i-s-otdel2-проверка-кр-кл': IISOtdel2ПроверкаКрКлModel,
    'i-i-s-otdel2-сотрудники': IISOtdel2СотрудникиModel
  },

  'application-name': 'Otdel2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otdel2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otdel2',
          title: 'Otdel2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        otdel2: {
          caption: 'Otdel2',
          title: 'Otdel2',
          'i-i-s-otdel2-отдел-кр-l': {
            caption: 'Отдел кр',
            title: ''
          },
          'i-i-s-otdel2-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-otdel2-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-otdel2-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-otdel2-закл-кр-дог-l': {
            caption: 'Закл кр дог',
            title: ''
          },
          'i-i-s-otdel2-проверка-кр-кл-l': {
            caption: 'Проверка кр кл',
            title: ''
          },
          'i-i-s-otdel2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-otdel2-погаш-кр-l': {
            caption: 'Погаш кр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otdel2-должности-l': IISOtdel2ДолжностиLForm,
    'i-i-s-otdel2-закл-кр-дог-l': IISOtdel2ЗаклКрДогLForm,
    'i-i-s-otdel2-клиенты-l': IISOtdel2КлиентыLForm,
    'i-i-s-otdel2-организация-l': IISOtdel2ОрганизацияLForm,
    'i-i-s-otdel2-отдел-кр-l': IISOtdel2ОтделКрLForm,
    'i-i-s-otdel2-погаш-кр-l': IISOtdel2ПогашКрLForm,
    'i-i-s-otdel2-проверка-кр-кл-l': IISOtdel2ПроверкаКрКлLForm,
    'i-i-s-otdel2-сотрудники-l': IISOtdel2СотрудникиLForm,
    'i-i-s-otdel2-должности-e': IISOtdel2ДолжностиEForm,
    'i-i-s-otdel2-закл-кр-дог-e': IISOtdel2ЗаклКрДогEForm,
    'i-i-s-otdel2-клиенты-e': IISOtdel2КлиентыEForm,
    'i-i-s-otdel2-организация-e': IISOtdel2ОрганизацияEForm,
    'i-i-s-otdel2-отдел-кр-e': IISOtdel2ОтделКрEForm,
    'i-i-s-otdel2-погаш-кр-e': IISOtdel2ПогашКрEForm,
    'i-i-s-otdel2-проверка-кр-кл-e': IISOtdel2ПроверкаКрКлEForm,
    'i-i-s-otdel2-сотрудники-e': IISOtdel2СотрудникиEForm
  },

});

export default translations;
