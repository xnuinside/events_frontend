
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";



class Filter {

  @tracked selected_options;

  constructor(options, label, selected_options) {
    this.options = options;
    this.label = label;
    this.selected_options = selected_options;
  }


}

export default class FilterComponent extends Component {

  filters= {
    countries: new Filter(['Russia', 'USA', 'Ukrain', 'Belarus'], 'Countries', ['Russia']),
    cities: new Filter(['Moscow', 'London', 'Kiev', 'St Petersburg'], 'Cities', ['Moscow', 'St Petersburg']),
    languages: new Filter(['RU', 'EN', 'AR', 'CH'], 'Languages', ['RU']),
    programm_languages: new Filter(['Java', 'Python', 'JavaScript', 'Rust'], 'Programming Languages', ['Python'])
  };

}
