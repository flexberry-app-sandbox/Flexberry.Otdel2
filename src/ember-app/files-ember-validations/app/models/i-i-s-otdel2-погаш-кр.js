import {
  defineNamespace,
  defineProjections,
  Model as ПогашКрMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-погаш-кр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПогашКрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
