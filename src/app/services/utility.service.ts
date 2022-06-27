import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  isOpenSideNav = new BehaviorSubject<boolean>(false);
  
  openSideNav(){
    this.isOpenSideNav.asObservable().subscribe((value)=>{
      this.isOpenSideNav.next(!value)
    })
  }
}
