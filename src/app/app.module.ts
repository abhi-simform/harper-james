import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/global/sidebar/sidebar.component';
import { HeaderComponent } from './components/global/header/header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MatterComponent } from './components/matter/matter.component';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { CityComponent } from './components/invoices/city/city.component';
import { EnterpriseComponent } from './components/invoices/enterprise/enterprise.component';
import { OndemandComponent } from './components/invoices/ondemand/ondemand.component';
import { DisbursementComponent } from './components/disbursement/disbursement.component';
import { ReportComponent } from './components/report/report.component';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RoleComponent } from './components/configuration/role/role.component';
import { HelpComponent } from './components/help/help.component';
import { TableComponent } from './components/global/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
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
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
