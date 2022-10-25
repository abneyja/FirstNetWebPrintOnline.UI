import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs';
import { repeatWhen } from 'rxjs/operators';
import { PrintRequest } from 'src/app/models/print-request.model';
import { PrintRequestsService } from 'src/app/services/print-requests.service';
import { AuthService } from '@auth0/auth0-angular';

declare var bootstrap: any;

@Component({
  selector: 'app-print-request-list',
  templateUrl: './print-request-list.component.html',
  styleUrls: ['./print-request-list.component.css'],
})
export class PrintRequestListComponent implements OnInit {
  printRequests: PrintRequest[] = [];
  constructor(
    public auth: AuthService,
    private printRequestsService: PrintRequestsService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.printRequestsService
      .getAllPrintRequests()
      .pipe(repeatWhen((co) => co.pipe(delay(3000))))
      .subscribe({
        next: (printRequests) => {
          //this.printRequests = this.split_ordernumber_at_index(printRequests);
          this.printRequests = printRequests;
          this.changeDetection.detectChanges();
        },
        error: (response) => {
          console.log(response);
        },
      });

    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  deletePrintRequest(id: string) {
    this.printRequestsService.deletePrintRequest(id).subscribe({
      next: (printrequest) => {
        this.refreshList();
      },
    });
  }

  split_ordernumber_at_index(printRequests: PrintRequest[]) {
    for (var index in printRequests) {
      printRequests[index].ordernumber =
        printRequests[index].ordernumber.substring(0, 3) +
        ' ' +
        printRequests[index].ordernumber.substring(3);
    }
    return printRequests;
  }

  refreshList() {
    window.location.reload();
  }
}
