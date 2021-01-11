import { PLATFORM } from 'aurelia-framework';
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        alert('in app constructor');
        config.title = 'Applicants';
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('applist'), title: 'Select' },
            { route: 'applist', moduleId: PLATFORM.moduleName('applist'), title: 'Select' },
        ]);
        this.router = router;
    };
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map