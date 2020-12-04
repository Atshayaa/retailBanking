import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AddUsersComponent } from './components/add-users/add-users.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, AdminPageComponent, UserPageComponent, ListUsersComponent, AccountComponent, TransactionComponent, AddUsersComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent      
  ]
})
export class AuthModule { }
