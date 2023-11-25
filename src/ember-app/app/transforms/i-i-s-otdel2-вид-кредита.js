import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидКредитаEnum from '../enums/i-i-s-otdel2-вид-кредита';

export default FlexberryEnum.extend({
  enum: ВидКредитаEnum,
  sourceType: 'IIS.Otdel2.ВидКредита'
});
