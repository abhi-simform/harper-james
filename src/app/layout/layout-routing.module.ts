import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
