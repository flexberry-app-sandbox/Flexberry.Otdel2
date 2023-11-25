import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПроверкаКрКлMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-проверка-кр-кл';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПроверкаКрКлMixin, Validations, {
});

defineProjections(Model);

export default Model;
