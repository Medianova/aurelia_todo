import {AuthorizeStep} from 'services/authorize-step';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: 'welcome', name: 'welcome', moduleId: 'welcome',     nav: true, title: 'Welcome',      auth: true },
      { route: 'login',    name: 'login',    moduleId: './components/user/login/login', nav: true, title: 'User' },
      { route: '',        redirect: 'welcome' }
    ]);

    this.router = router;
  }
}
