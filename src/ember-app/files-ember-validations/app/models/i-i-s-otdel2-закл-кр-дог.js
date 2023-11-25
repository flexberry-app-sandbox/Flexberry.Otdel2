import {
  defineNamespace,
  defineProjections,
  Model as ЗаклКрДогMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-закл-кр-дог';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаклКрДогMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
