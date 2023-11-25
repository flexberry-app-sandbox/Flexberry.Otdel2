import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otdel2-должности-l');
  this.route('i-i-s-otdel2-должности-e',
  { path: 'i-i-s-otdel2-должности-e/:id' });
  this.route('i-i-s-otdel2-должности-e.new',
  { path: 'i-i-s-otdel2-должности-e/new' });
  this.route('i-i-s-otdel2-закл-кр-дог-l');
  this.route('i-i-s-otdel2-закл-кр-дог-e',
  { path: 'i-i-s-otdel2-закл-кр-дог-e/:id' });
  this.route('i-i-s-otdel2-закл-кр-дог-e.new',
  { path: 'i-i-s-otdel2-закл-кр-дог-e/new' });
  this.route('i-i-s-otdel2-клиенты-l');
  this.route('i-i-s-otdel2-клиенты-e',
  { path: 'i-i-s-otdel2-клиенты-e/:id' });
  this.route('i-i-s-otdel2-клиенты-e.new',
  { path: 'i-i-s-otdel2-клиенты-e/new' });
  this.route('i-i-s-otdel2-организация-l');
  this.route('i-i-s-otdel2-организация-e',
  { path: 'i-i-s-otdel2-организация-e/:id' });
  this.route('i-i-s-otdel2-организация-e.new',
  { path: 'i-i-s-otdel2-организация-e/new' });
  this.route('i-i-s-otdel2-отдел-кр-l');
  this.route('i-i-s-otdel2-отдел-кр-e',
  { path: 'i-i-s-otdel2-отдел-кр-e/:id' });
  this.route('i-i-s-otdel2-отдел-кр-e.new',
  { path: 'i-i-s-otdel2-отдел-кр-e/new' });
  this.route('i-i-s-otdel2-погаш-кр-l');
  this.route('i-i-s-otdel2-погаш-кр-e',
  { path: 'i-i-s-otdel2-погаш-кр-e/:id' });
  this.route('i-i-s-otdel2-погаш-кр-e.new',
  { path: 'i-i-s-otdel2-погаш-кр-e/new' });
  this.route('i-i-s-otdel2-проверка-кр-кл-l');
  this.route('i-i-s-otdel2-проверка-кр-кл-e',
  { path: 'i-i-s-otdel2-проверка-кр-кл-e/:id' });
  this.route('i-i-s-otdel2-проверка-кр-кл-e.new',
  { path: 'i-i-s-otdel2-проверка-кр-кл-e/new' });
  this.route('i-i-s-otdel2-сотрудники-l');
  this.route('i-i-s-otdel2-сотрудники-e',
  { path: 'i-i-s-otdel2-сотрудники-e/:id' });
  this.route('i-i-s-otdel2-сотрудники-e.new',
  { path: 'i-i-s-otdel2-сотрудники-e/new' });
});

export default Router;
