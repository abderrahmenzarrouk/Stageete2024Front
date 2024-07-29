import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TicketdashboardComponent } from './components/ticketdashboard/ticketdashboard.component';
import { ModulesdashboardComponent } from './components/modulesdashboard/modulesdashboard.component';
import { ModuleDetailsComponent } from './components/module-details/module-details.component';
import { AssigneeDetailsComponent } from './components/assignee-details/assignee-details.component';
import { AssigneeindexComponent } from './components/assigneeindex/assigneeindex.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { AuthAdminGuard } from './guards/RH/authguard-hr.guard';
import { AccessPageComponent } from './components/access-page/access-page.component';
import { RuleslistComponent } from './components/ruleslist/ruleslist.component';
import { AssigneerankingComponent } from './components/assigneeranking/assigneeranking.component';
import { CreatedVsResolvedComponent } from './components/created-vs-resolved/created-vs-resolved.component';
import { WorkerslistComponent } from './components/workerslist/workerslist.component';
import { ForgotPasswordPageComponent } from './components/forgot-password-page/forgot-password-page.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { UpdateDatabaseComponent } from './components/update-database/update-database.component';
import { VersionsComponent } from './components/versions/versions.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'side', component: SidebarComponent },
  { path: 'ticket-dashboard',canActivate:[AuthAdminGuard], component: TicketdashboardComponent },
  { path: 'modules-dashboard',canActivate:[AuthAdminGuard], component: ModulesdashboardComponent },
  { path: 'modules-details',canActivate:[AuthAdminGuard], component: ModuleDetailsComponent },
  { path: 'assignee-details',canActivate:[AuthAdminGuard], component: AssigneeDetailsComponent },
  { path: 'versatility-index',canActivate:[AuthAdminGuard], component: AssigneeindexComponent },
  { path: 'Sign-up', component: SigninPageComponent },
  { path: 'rules',canActivate:[AuthAdminGuard], component: RuleslistComponent },
  { path: 'ranking', canActivate:[AuthAdminGuard],component: AssigneerankingComponent },
  { path: 'createdresolved',canActivate:[AuthAdminGuard], component: CreatedVsResolvedComponent },
  { path: 'workers',canActivate:[AuthAdminGuard], component: WorkerslistComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'reset-password',canActivate:[AuthAdminGuard], component: ResetPasswordFormComponent },
  { path: 'update-database',canActivate:[AuthAdminGuard], component: UpdateDatabaseComponent },
  { path: 'versions',canActivate:[AuthAdminGuard], component: VersionsComponent },
  { path: 'users',canActivate:[AuthAdminGuard], component: ListUsersComponent },
  { path: 'access', component: AccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
