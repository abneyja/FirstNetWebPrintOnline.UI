import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import config from '../../../auth_config.json';
import { PrintRequest } from '../models/print-request.model';

@Injectable({
  providedIn: 'root'
})
export class PrintRequestsService {

  baseApiUrl: string = config.baseApiUrl;

  constructor(public auth: AuthService, private http: HttpClient) { }

  getAllPrintRequests(): Observable<PrintRequest[]> {    
    return this.http.get<PrintRequest[]>(this.baseApiUrl + '/api/printrequests');  
  }

  addPrintRequest(addPrintRequestRequest: PrintRequest): Observable<PrintRequest>{
    addPrintRequestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<PrintRequest>(this.baseApiUrl + '/api/printrequests', addPrintRequestRequest);
  }

  deletePrintRequest(id: string): Observable<PrintRequest> {
    return this.http.delete<PrintRequest>(this.baseApiUrl + '/api/printrequests/' + id);
  }

}

