import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintRequestListComponent } from './components/print-requests/print-request-list/print-request-list.component';
import { AddPrintRequestComponent } from './components/print-requests/add-print-request/add-print-request.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Import the module from the SDK
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DropDownMenuComponent } from './components/drop-down-menu/drop-down-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintRequestListComponent,
    AddPrintRequestComponent,
    LogoutButtonComponent,
    ErrorComponent,
    LoginScreenComponent,
    LoadingComponent,
    DropDownMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
