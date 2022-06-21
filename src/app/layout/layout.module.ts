import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { HeaderComponent } from './../components/header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { MatterComponent } from './matter/matter.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { CityComponent } from './invoices/city/city.component';
import { EnterpriseComponent } from './invoices/enterprise/enterprise.component';
import { OndemandComponent } from './invoices/ondemand/ondemand.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { ReportComponent } from './report/report.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { RoleComponent } from './configuration/role/role.component';
import { HelpComponent } from './help/help.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    ClientsComponent,
    MatterComponent,
    TimesheetsComponent,
    CityComponent,
    EnterpriseComponent,
    OndemandComponent,
    DisbursementComponent,
    ReportComponent,
    UsersComponent,
    SettingsComponent,
    RoleComponent,
    HelpComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
