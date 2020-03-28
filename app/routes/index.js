import Route from '@ember/routing/route';
/* https://guides.emberjs.com/release/routing/redirection/ */
export default class IndexRoute extends Route {
beforeModel(/* transition */) {
    this.transitionTo('events'); // Implicitly aborts the on-going transition.
  }
};
