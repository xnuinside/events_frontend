import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class EventsComponent extends Component {

  @tracked isListView = true;

  @action switchView(type) {
    if (type == 'list') {
      this.isListView = true;
      }
    else {
      this.isListView = false;
     }
  };


}
