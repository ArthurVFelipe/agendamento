import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem('login');

  const isLoginRoute = state.url === '/login' || state.url === '/';
  
  if (!token && !isLoginRoute) {
    router.navigate(['/login']);
    return false;
  }

  if (token && isLoginRoute) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
