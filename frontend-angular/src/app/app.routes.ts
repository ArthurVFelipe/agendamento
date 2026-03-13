import { Routes } from '@angular/router';
import {PublicLayout} from './layouts/public-layout/public-layout';
import {AdminLayout} from './layouts/admin-layout/admin-layout';
import {authGuard} from './core/guards/auth/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },

  {
    path: '',
    component: AdminLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.routes')
            .then(m => m.HOME_ROUTES)
      },
    ]
  },


];
