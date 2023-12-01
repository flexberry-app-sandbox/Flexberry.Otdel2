import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otdel2.caption'),
          title: i18n.t('forms.application.sitemap.otdel2.title'),
          children: [{
            link: 'i-i-s-otdel2-отдел-кр-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-отдел-кр-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-отдел-кр-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-otdel2-организация-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-организация-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-otdel2-клиенты-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-клиенты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otdel2-должности-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-должности-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-otdel2-закл-кр-дог-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-закл-кр-дог-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-закл-кр-дог-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otdel2-проверка-кр-кл-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-проверка-кр-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-проверка-кр-кл-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-otdel2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-otdel2-погаш-кр-l',
            caption: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-погаш-кр-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel2.i-i-s-otdel2-погаш-кр-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})