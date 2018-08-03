import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { alternationTrigger } from './alternation.trigger';
import { Alternation } from './alternation.service';

@Component({
  selector: 'alternation',
  animations: [alternationTrigger],
  styleUrls: ['./alternation.component.scss'],
  template: `<div [style.backgroundImage]="safeSrc" (@alternation.done)="done($event)"
    [@alternation]="alter.position(alternation | async)"></div>`,
})
export class AlternationComponent implements OnInit {
  constructor(
    public alter: Alternation,
    private renderer: Renderer2,
    private dom: DomSanitizer,
    private el: ElementRef
  ) { }
  @Input() delay: number;
  @Input() src: string;
  alternation;

  get safeSrc(): SafeStyle {
    return this.src ? this.dom.bypassSecurityTrustStyle(`url(${ this.src })`) : '';
  }

  done(ev): void {
    this.renderer.setStyle(ev.element, 'transform', `translateY(${ ev.toState }px)`);
    this.alter.done();
  }

  ngOnInit() {
    this.alternation = this.alter.init(this.el, { delay: this.delay });
  }

}
