import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class VehicleForm extends Component {
  @service store;
  @service router;
  @service settings;
}
