import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';
import { MapComponent } from 'src/app/pages/map/map.component';
import { NotificationsComponent } from 'src/app/pages/notifications/notifications.component';
import { TablesComponent } from 'src/app/pages/tables/tables.component';
import { TypographyComponent } from 'src/app/pages/typography/typography.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [  { path: "dashboard", component: DashboardComponent },
{ path: "icons", component: IconsComponent },
{ path: "maps", component: MapComponent },
{ path: "notifications", component: NotificationsComponent },
{ path: "user", component: UserComponent },
{ path: "tables", component: TablesComponent },
{ path: "typography", component: TypographyComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
