import EntityModel from './entity';

export default class EventModel extends EntityModel {
  get privatePropertyNames() {
    return [...super.privatePropertyNames, 'scope', 'name', 'occured_at'];
  }
}
