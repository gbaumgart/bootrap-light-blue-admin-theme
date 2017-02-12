import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module') },
    { path: 'form', loadChildren: () => System.import('../form/form.module') },
    { path: 'statistics', loadChildren: () => System.import('../statistics/statistics.module') },
    { path: 'ui', loadChildren: () => System.import('../ui/ui.module') },
    { path: 'components', loadChildren: () => System.import('../components/components.module') },
    { path: 'tables', loadChildren: () => System.import('../tables/tables.module') },
    { path: 'widgets', loadChildren: () => System.import('../widgets/widgets.module') },
    { path: 'special', loadChildren: () => System.import('../special/special.module') }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
