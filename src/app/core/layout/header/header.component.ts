import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  reportName: string = '';
  private subscription!: Subscription;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.subscription = this.headerService.reportName$.subscribe((name) => {
      this.reportName = name;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
