import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


import { UserComponent } from 'src/app/pages/user/user.component';
import { TablesComponent } from 'src/app/pages/tables/tables.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';
import { TypographyComponent } from 'src/app/pages/typography/typography.component';
import { NotificationsComponent } from 'src/app/pages/notifications/notifications.component';
import { MapComponent } from 'src/app/pages/map/map.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule,
   // HttpClientModule,
    NgbModule,
  ]
})
export class AdminLayoutModule { }
