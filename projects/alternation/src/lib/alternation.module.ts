import { NgModule } from '@angular/core';
import { AlternationComponent } from './alternation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AlternationComponent],
  exports: [AlternationComponent]
})
export class AlternationModule { }
