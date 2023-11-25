import {
  defineNamespace,
  defineProjections,
  Model as ПроверкаКрКлMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-проверка-кр-кл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроверкаКрКлMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
