import { Serializer as ОтделКрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel2-отдел-кр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтделКрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
