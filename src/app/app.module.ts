import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { userRegistrationService } from '../app/auth/components/userRegistration/userRegistration.service';
import { accountService } from './auth/components/account/accountService.service';
import { transactionService } from '../app/auth/components/transaction/transactionService.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [userRegistrationService, accountService, transactionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
