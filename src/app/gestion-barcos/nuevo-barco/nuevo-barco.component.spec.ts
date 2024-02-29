import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBarcoComponent } from './nuevo-barco.component';

describe('NuevoBarcoComponent', () => {
  let component: NuevoBarcoComponent;
  let fixture: ComponentFixture<NuevoBarcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoBarcoComponent]
    });
    fixture = TestBed.createComponent(NuevoBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
