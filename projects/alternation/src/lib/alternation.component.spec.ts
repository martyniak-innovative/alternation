import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternationComponent } from './alternation.component';

describe('AlternationComponent', () => {
  let component: AlternationComponent;
  let fixture: ComponentFixture<AlternationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
