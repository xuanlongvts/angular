import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHttpComponent } from './service-http.component';

describe('ServiceHttpComponent', () => {
  let component: ServiceHttpComponent;
  let fixture: ComponentFixture<ServiceHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
