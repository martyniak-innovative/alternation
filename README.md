# 〽️ Alternation 

```bash
npm i alternation --save
```

### ngx image parallax build on top of @angular/animations

```ts
import { AlternationModule } from 'alternation';

@NgModule({
  imports: [
    AlternationModule,
  ],
})
export YourComponent {}
```

```html
<alternation src="assets/image.png"></alternation>
```

```html
<main fxLayout fxLayoutAlign="center center">
  <alternation *ngIf="document" [src]="document?.image"></alternation>
  <mat-spinner *ngIf="!document"></mat-spinner>
</main>
```
