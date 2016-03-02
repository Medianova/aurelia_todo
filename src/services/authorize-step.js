import {Redirect} from 'aurelia-router';

export class AuthorizeStep {

  constructor() {
    console.log("here");
  }

  run(navigationInstruction, next) {
    console.log("dfdsfdsf");
    if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
      var isLoggedIn = /* insert magic here */false;
      if (!isLoggedIn) {
        return next.cancel(new Redirect('/login'));
      }
    }

    return next();
  }
}
