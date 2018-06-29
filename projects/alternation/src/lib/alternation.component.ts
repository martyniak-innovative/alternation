import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { alternationTrigger } from './alternation.trigger';
import { Alternation } from './alternation.service';

@Component({
  selector: 'alternation',
  animations: [alternationTrigger],
  styleUrls: ['./alternation.component.scss'],
  template: `
    <div [style.backgroundImage]="safeSrc" (@alternation.done)="done($event)"
      [@alternation]="alter.position(alternation | async)"></div>
  `,
})
export class AlternationComponent implements OnInit {
  constructor(public alter: Alternation, private dom: DomSanitizer) { }
  alternation;

  @Input() src: string;

  get safeSrc(): SafeStyle {
    return this.src ? this.dom.bypassSecurityTrustStyle(`url(${ this.src })`) : '';
  }

  done(ev) {
    ev.element.style.transform = `translateY(${ ev.toState }px)`;
  }

  ngOnInit() {
    this.alternation = this.alter.init();
  }

}
