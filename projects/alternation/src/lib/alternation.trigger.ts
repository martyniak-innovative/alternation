import { trigger, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const alternationTrigger: AnimationTriggerMetadata = trigger('alternation', [
  transition('* => *', [
    animate(
      '{{ time }}ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      style({ transform: 'translateY({{ next }}px)' })
    ),
  ]),
]);
