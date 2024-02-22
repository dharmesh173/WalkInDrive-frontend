import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private step1: BehaviorSubject<boolean>;
  private step2: BehaviorSubject<boolean>;
  private step3: BehaviorSubject<boolean>;

  constructor() {
    this.step1 = new BehaviorSubject(true);
    this.step2 = new BehaviorSubject(false);
    this.step3 = new BehaviorSubject(false);
  }

  setSteps(show: boolean) {

    this.step1.next(show);
  }

  getStep1(): Observable<boolean> {
    return this.step1.asObservable();
  }

  setSteps2(show: boolean) {

    this.step2.next(show);
  }

  getStep2(): Observable<boolean> {
    return this.step2.asObservable();
  }

  setSteps3(show: boolean) {

    this.step3.next(show);
  }

  getStep3(): Observable<boolean> {
    return this.step3.asObservable();
  }
}
