import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrintRequest } from 'src/app/models/print-request.model';
import { PrintRequestsService } from 'src/app/services/print-requests.service';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-print-request',
  templateUrl: './add-print-request.component.html',
  styleUrls: ['./add-print-request.component.css'],
})
export class AddPrintRequestComponent implements OnInit {
  addPrintRequestRequest: PrintRequest = {
    id: '',
    ordernumber: '',
    username: '',
    email: '',
    timestamp: '',
    timestale: -1,
    printsonar: true,
    printphone: true,
    printorder: true,
    printbarcodes: true,
    printcoam: false,
    automode: true,
    status: 'queued',
  };

  printRequests: PrintRequest[] = [];

  constructor(
    public auth: AuthService,
    private printRequestsService: PrintRequestsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.auth.user$)
      this.auth.user$.subscribe((userProfile) => {
        this.addPrintRequestRequest.username = userProfile?.name ?? '';
        this.addPrintRequestRequest.email = userProfile?.email ?? '';
      });
  }

  addPrintRequest() {
    this.printRequestsService
      .addPrintRequest(this.addPrintRequestRequest)
      .subscribe({
        next: (printrequest) => {
          this.refreshList();
        },
      });
    console.log(this.addPrintRequestRequest);
  }

  printOptions() {
    if (this.addPrintRequestRequest.automode) {
      this.addPrintRequestRequest.printsonar = true;
      this.addPrintRequestRequest.printphone = true;
      this.addPrintRequestRequest.printorder = true;
      this.addPrintRequestRequest.printbarcodes = true;
    } else this.addPrintRequestRequest.printbarcodes = false;

    this.coamOption();
  }

  coamOption() {
    if (!this.addPrintRequestRequest.printbarcodes)
      this.addPrintRequestRequest.printcoam = false;
  }

  refreshList() {
    window.location.reload();
  }
}
