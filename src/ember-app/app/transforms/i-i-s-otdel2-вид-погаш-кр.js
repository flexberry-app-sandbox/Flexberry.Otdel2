import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидПогашКрEnum from '../enums/i-i-s-otdel2-вид-погаш-кр';

export default FlexberryEnum.extend({
  enum: ВидПогашКрEnum,
  sourceType: 'IIS.Otdel2.ВидПогашКр'
});
