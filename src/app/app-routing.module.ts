import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintRequestListComponent } from './components/print-requests/print-request-list/print-request-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ErrorComponent } from './components/error/error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: PrintRequestListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
