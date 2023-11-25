import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПогашКрMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-погаш-кр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПогашКрMixin, Validations, {
});

defineProjections(Model);

export default Model;
