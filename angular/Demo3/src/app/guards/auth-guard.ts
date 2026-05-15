import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const authGuard: CanActivateFn = (route, state) => {
  // route is the ActivatedRouteSnapshot that contains information about the route being accessed
  // state is the RouterStateSnapshot that contains information about the router state at the time of navigation
  //console.log(route, state);

  let userAuthSerice = inject(UserAuth);
  let router = inject(Router);

  if (userAuthSerice.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
