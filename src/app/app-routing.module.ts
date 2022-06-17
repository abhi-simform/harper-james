import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'matter', component: MatterComponent },
  { path: 'timesheets', component: TimesheetsComponent },
  { path: 'invoices/city', component: CityComponent },
  { path: 'invoices/enterprise', component: EnterpriseComponent },
  { path: 'invoices/ondemand', component: OndemandComponent },
  { path: 'disbursement', component: DisbursementComponent },
  { path: 'report', component: ReportComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'configuration/role', component: RoleComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
