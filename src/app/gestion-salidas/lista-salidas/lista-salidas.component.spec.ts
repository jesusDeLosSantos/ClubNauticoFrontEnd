import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSalidasComponent } from './lista-salidas.component';

describe('ListaSalidasComponent', () => {
  let component: ListaSalidasComponent;
  let fixture: ComponentFixture<ListaSalidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSalidasComponent]
    });
    fixture = TestBed.createComponent(ListaSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
