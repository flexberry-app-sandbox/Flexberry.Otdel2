import {
  defineNamespace,
  defineProjections,
  Model as ОтделКрMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-отдел-кр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтделКрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
