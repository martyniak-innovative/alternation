import { Injectable, NgZone } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class Alternation {
  constructor(private dispatcher: ScrollDispatcher, private zone: NgZone) { }
  running: BehaviorSubject<boolean> = new BehaviorSubject(false);
  time: BehaviorSubject<string> = new BehaviorSubject('.2s');
  speed: BehaviorSubject<number> = new BehaviorSubject(3);
  alternation: Subject<number> = new Subject();

  position(value) {
    return { value, params: { next: value || 0, time: this.time.value } };
  }

  done() {
    this.running.next(false);
  }

  init(el, options: { delay?: number } = { delay: 100 }) {

    this.dispatcher.scrolled(options.delay).subscribe((scrollable: CdkScrollable) => {
      if (scrollable) {
        if (this.running.value) { return; }
        const $scrollable: HTMLElement = scrollable.getElementRef().nativeElement;
        let next = -Math.round(($scrollable.scrollTop / 6));
        // const rect = el.nativeElement.getBoundingClientRect();
        // console.log(rect.top, rect.height, rect.top + rect.height);

        if (next) {
          this.zone.run(() => {
            this.running.next(true);
            this.alternation.next(next);
          });
        }
      }
    });

    return this.alternation;
  }
}
