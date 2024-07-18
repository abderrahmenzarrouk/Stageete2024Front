import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TicketdashboardComponent } from './components/ticketdashboard/ticketdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketDialogComponent } from './components/ticket-dialog/ticket-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulesdashboardComponent } from './components/modulesdashboard/modulesdashboard.component';
import { ModuleDetailsComponent } from './components/module-details/module-details.component';
import { AssigneeDetailsComponent } from './components/assignee-details/assignee-details.component';
import { AssigneeindexComponent } from './components/assigneeindex/assigneeindex.component';
import { AssigneepopupComponent } from './components/assigneepopup/assigneepopup.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { AccessPageComponent } from './components/access-page/access-page.component';
import { RuleslistComponent } from './components/ruleslist/ruleslist.component';
import { AddrulespopupComponent } from './components/addrulespopup/addrulespopup.component';
import { AssigneerankingComponent } from './components/assigneeranking/assigneeranking.component';
import { CreatedVsResolvedComponent } from './components/created-vs-resolved/created-vs-resolved.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TicketdashboardComponent,
    TicketDialogComponent,
    ModulesdashboardComponent,
    ModuleDetailsComponent,
    AssigneeDetailsComponent,
    AssigneeindexComponent,
    AssigneepopupComponent,
    LoginPageComponent,
    SigninPageComponent,
    AccessPageComponent,
    RuleslistComponent,
    AddrulespopupComponent,
    AssigneerankingComponent,
    CreatedVsResolvedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,

    
    
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
