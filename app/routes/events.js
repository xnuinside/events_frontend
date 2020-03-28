import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class EventsRoute extends Route {

  async model() {
    let response = await fetch('http://0.0.0.0:8000/');
    let { data } = await response.json();
    return data.map(model => {
      return model;
    });
    }
 };
