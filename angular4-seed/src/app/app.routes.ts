import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
}, {
  path: 'app',   loadChildren: './layout/layout.module#LayoutModule'
}, {
  path: 'login', loadChildren: './login/login.module#LoginModule'
}, {
  path: 'error', loadChildren: './error/error.module#ErrorModule'
}, {
  path: '**',    loadChildren: './error/error.module#ErrorModule'
}
];
