import EntityModel from './entity';

export default class UserModel extends EntityModel {
  get protectedPropertyNames() {
    return [...super.protectedPropertyNames, 'last_seen_at'];
  }
}
