import 'messenger/build/js/messenger';
import 'messenger/build/js/messenger-theme-flat';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Buttons } from './buttons/buttons.component';
import { Dialogs } from './dialogs/dialogs.component';
import { Icons } from './icons/icons.component';
import { Tabs } from './tabs/tabs.component';
import { Notifications } from './notifications/notifications.component';
import { Accordion } from './accordion/accordion.component';
import { TooltipModule, AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule, AccordionModule, PopoverModule  } from 'ngx-bootstrap';
import { MessengerDemo } from './notifications/messenger/messenger.directive';
import { WidgetModule } from '../layout/widget/widget.module';

export const routes = [
  {path: '', redirectTo: 'buttons', pathMatch: 'full'},
  {path: 'buttons', component: Buttons},
  {path: 'dialogs', component: Dialogs},
  {path: 'icons', component: Icons},
  {path: 'tabs', component: Tabs},
  {path: 'notifications', component: Notifications},
  {path: 'accordion', component: Accordion},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Buttons,
    Dialogs,
    Icons,
    Tabs,
    Accordion,
    Notifications,
    MessengerDemo
  ],
  imports: [
    CommonModule,
    WidgetModule,
    FormsModule,
    RouterModule.forChild(routes),
    TooltipModule.forRoot(), AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(), AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ]
})
export class UiModule {
  static routes = routes;
}
