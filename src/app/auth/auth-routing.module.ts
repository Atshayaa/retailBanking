import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddAccountDetailsComponent } from './components/add-account-details/add-account-details.component';
import { ListAccountDetailsComponent } from './components/list-account-details/list-account-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OpenNewAccountComponent } from './components/open-new-account/open-new-account.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'adminpage', component: AdminPageComponent},
  {path : 'userpage', component: UserPageComponent},
  {path : 'userpage/:userId', component: UserPageComponent},
  {path : 'listuser', component: ListUsersComponent},
  {path : 'account', component: AccountComponent},
  {path : 'transaction', component: TransactionComponent},
  {path : 'addUsers', component: AddUsersComponent},
  {path : 'addAccountDetails', component: AddAccountDetailsComponent},
  {path : 'listAccountDetails', component: ListAccountDetailsComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'openNewAccount', component: OpenNewAccountComponent},
  {path : '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
