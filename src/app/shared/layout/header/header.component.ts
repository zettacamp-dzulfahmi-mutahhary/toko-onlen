import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private util: UtilityService) {}

  ngOnInit(): void {}

  @Input()
  sideNavRef: MatSidenav;

  debug =  this.util.isOpenSideNav.asObservable()

  openSideNav() {
    // this.util.openSideNav();
    this.sideNavRef.toggle()
  }
}
