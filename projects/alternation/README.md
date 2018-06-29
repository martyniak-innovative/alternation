# 〽️ Alternation 

## ngx image parallax build on top of @angular/animations and @angular/cdk scrollable

```bash
npm i alternation --save
or
npm i alternation @angular/cdk @angular/animations --save
```

```ts
import { AlternationModule } from 'alternation';

@NgModule({
  imports: [
    AlternationModule,
  ],
})
export YourModule {}
```

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ScrollDispatchModule,
  ],
})
export AppModule {}
```

```html
<alternation src="assets/image.png"></alternation>
```

```html
<main cdkScrollable fxLayout fxLayoutAlign="center center">
  <alternation *ngIf="document" [src]="document?.image"></alternation>
  <mat-spinner *ngIf="!document"></mat-spinner>
</main>
```
