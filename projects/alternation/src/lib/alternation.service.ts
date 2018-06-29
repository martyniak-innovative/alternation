import { Injectable, NgZone } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class Alternation {
  constructor(private dispatcher: ScrollDispatcher, private zone: NgZone) { }
  time: BehaviorSubject<string> = new BehaviorSubject('.2s');
  speed: BehaviorSubject<number> = new BehaviorSubject(3);
  alternation: Subject<number> = new Subject();

  position(value) {
    return { value, params: { next: value || 0, time: this.time.value } };
  }

  init(options: { delay?: number, speed?: number } = { delay: 100, speed: null }) {

    if (options.speed) {
      this.speed.next(options.speed);
    }

    this.dispatcher.scrolled(options.delay).subscribe((scrollable: CdkScrollable) => {
      if (scrollable) {
        const $scrollable: HTMLElement = scrollable.getElementRef().nativeElement;
        let next =  -Math.round((($scrollable.scrollTop / 10) * this.speed.value));

        if (next) {
          this.zone.run(() => this.alternation.next(next));
        }
      }
    });

    return this.alternation;
  }
}
