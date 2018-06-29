import { Injectable, NgZone } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class Alternation {
  constructor(private dispatcher: ScrollDispatcher, private zone: NgZone) { }
  time: BehaviorSubject<string> = new BehaviorSubject('.2s');
  speed: BehaviorSubject<number> = new BehaviorSubject(7);
  alternation: Subject<number> = new Subject();

  position(value) {
    return { value, params: { next: value, time: this.time.value } };
  }

  init(delay = 100) {
    this.dispatcher.scrolled(delay).subscribe((scrollable: CdkScrollable) => {
      const $scrollable: HTMLElement = scrollable.getElementRef().nativeElement;
      let next =  -Math.round(($scrollable.scrollTop / this.speed.value));

      if (next < -128) {
        next = -128;
      }

      this.zone.run(() => this.alternation.next(next));
    });

    return this.alternation;
  }
}
