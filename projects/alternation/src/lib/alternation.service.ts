import { Injectable, NgZone } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class Alternation {
  constructor(private dispatcher: ScrollDispatcher, private zone: NgZone) { }
  running: BehaviorSubject<boolean> = new BehaviorSubject(false);
  speed: BehaviorSubject<number> = new BehaviorSubject(3);
  alternation: BehaviorSubject<any> = new BehaviorSubject({ value: 0, params: { next: 0, time: 0 } });

  position(value, time) {
    return { value, params: { next: value || 0, time } };
  }

  done() {
    this.running.next(false);
  }

  start() {
    this.running.next(true);
  }

  init(el, options: { delay?: number } = { delay: null }) {

    this.dispatcher.scrolled(options.delay).subscribe((scrollable: CdkScrollable) => {
      if (scrollable) {
        if (this.running.value) { return; }
        const $scrollable: HTMLElement = scrollable.getElementRef().nativeElement;
        let next = -Math.round($scrollable.scrollTop / 3);
        const componentRect = el.nativeElement.getBoundingClientRect();
        const difference = Math.round(componentRect.height - componentRect.height * 2);
        const time = Math.abs(this.alternation.value.value - next) * 5;

        if (next < difference) {
          next = difference;
        }

        if (next) {
          this.zone.run(() => {
            this.alternation.next(this.position(next, time));
          });
        }
      }
    });

    return this.alternation;
  }
}
