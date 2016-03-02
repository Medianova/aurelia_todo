export class User {
  configureRouter(config, router) {
    config.title = 'User';
    config.map([
      { route: 'login', name: 'login', moduleId: './login/login', nav: false }
    ]);

    this.router = router;
  }
}
