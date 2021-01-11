import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Aurelia} from 'aurelia-framework';
import * as environment from '../config/environment.json';
import { PLATFORM } from  'aurelia-pal';
//import { I18N } from 'aurelia-i18n';
//import XHR from 'i18next-xhr-backend';
//import * as en from 'locales/en/translation.json'
//import * as de from 'locales/de/translation.json'
//import { Backend, TCustomAttribute } from 'aurelia-i18n';
//import { ValidationControllerFactory, ValidationRules } from 'aurelia-validation';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));
   // .plugin(PLATFORM.moduleName('aurelia-validation'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  //aurelia.use
  //  .standardConfiguration()
  //  .developmentLogging()
  //  .plugin('aurelia-i18n', (instance) => {
  //    let aliases = ['t', 'i18n'];
  //    // add aliases for 't' attribute
  //    TCustomAttribute.configureAliases(aliases);

  //    // register backend plugin
  //    instance.i18next.use(Backend.with(aurelia.loader));
  //  });


  

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

