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

```css
alternation {
  height: 256px; // 75vh; 45vw; 12em;
}
```

```html
  <alternation speed="2" delay="200" src="assets/image.png"></alternation>
```

```html
<main cdkScrollable fxLayout fxLayoutAlign="center center">
  <alternation *ngIf="document" [src]="document?.image"></alternation>
  <mat-spinner *ngIf="!document"></mat-spinner>
</main>
```

## plans
- tests
- documentation
- vertical scrolling
- background-attachment ??
- optimization ??
- split to component 
  `<alter-image src="..."></alter-image>` 
  `<alter-background src="...">
    ...  
  </alter-background>`
- better handling of parallax element
- (text) line paralax scorlling  ??
```html
<!-- with stagger delay -->
<alter-list>
  <alter-line>Hello</alter-line>
  <alter-line>World</alter-line>
</alter-list>
```
