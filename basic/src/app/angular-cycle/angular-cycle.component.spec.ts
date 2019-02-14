import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCycleComponent } from './angular-cycle.component';

describe('AngularCycleComponent', () => {
  let component: AngularCycleComponent;
  let fixture: ComponentFixture<AngularCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
