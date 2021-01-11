import {Router, RouterConfiguration} from 'aurelia-router';
import { inject, PLATFORM } from 'aurelia-framework';
//import { I18N } from 'aurelia-i18n';
//import XHR  from 'i18next-xhr-backend';

  
export class App {
  router: Router;
  //static inject = [I18N];
  i18n;

  constructor() { }
  
  configureRouter(config: RouterConfiguration, router: Router) {
    alert('in app constructor');
    config.title = 'Applicants';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('applist'), title: 'Select' },
      { route: 'applist', moduleId: PLATFORM.moduleName('applist'), title: 'Select' },

    ]);
    this.router = router;

    //alert('beore i18n setup');
    //this.i18n = i18n;
    //this.i18n
    //  .setLocale('de-DE');
   
        
    //alert('after locale setup');
  }
}
