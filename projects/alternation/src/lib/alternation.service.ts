import { Injectable, NgZone } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class Alternation {
  constructor(private dispatcher: ScrollDispatcher, private zone: NgZone) { }
  alternation: BehaviorSubject<any> = new BehaviorSubject({ value: 0, params: { next: 0, time: 0 } });
  running: BehaviorSubject<boolean> = new BehaviorSubject(false);
  speed: BehaviorSubject<number> = new BehaviorSubject(3);
  private _next = null;

  position(value, time) {
    return { value, params: { next: value || 0, time } };
  }

  done() {
    this.running.next(false);

    if (this._next) {
      this.zone.run(() => {
        this.alternation.next(this._next);
        this._next = null;
      });
    }
  }

  start() {
    this.running.next(true);
  }

  init(el, options: { delay?: number } = { delay: null }) {
    this.dispatcher.scrolled(options.delay).subscribe((scrollable: CdkScrollable) => {
      if (scrollable) {
        const $scrollable: HTMLElement = scrollable.getElementRef().nativeElement;
        const componentRect = el.nativeElement.getBoundingClientRect();
        const difference = Math.round(componentRect.height - componentRect.height * 2);
        let next = -Math.round($scrollable.scrollTop / 3);
        const time = Math.abs(this.alternation.value.value - next) * 5;

        if (next < difference) {
          next = difference;
        }

        const position = this.position(next, time);

        if (this.running.value) {
          this._next = position;
          return;
        }

        if (next) {
          this.zone.run(() => {
            this.alternation.next(position);
          });
        }
      }
    });

    return this.alternation;
  }
}
