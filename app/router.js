import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
this.route('events',  function(){
  this.route('new_event');
  this.route('calendar_view');
  this.route('list_view');
});
this.route('event', {path: '/events/:event_id'});
this.route('about');
this.route('maintainers')
this.route('contribute')
});
