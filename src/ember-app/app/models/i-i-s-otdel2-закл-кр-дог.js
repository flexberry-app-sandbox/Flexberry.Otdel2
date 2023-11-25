import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаклКрДогMixin
} from '../mixins/regenerated/models/i-i-s-otdel2-закл-кр-дог';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаклКрДогMixin, Validations, {
});

defineProjections(Model);

export default Model;
