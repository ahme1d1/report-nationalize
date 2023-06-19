import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private reportNameSubject = new Subject<string>();
  reportName$ = this.reportNameSubject.asObservable();

  constructor() { }

  setReportName(name: string) {
    this.reportNameSubject.next(name);
  }
}
