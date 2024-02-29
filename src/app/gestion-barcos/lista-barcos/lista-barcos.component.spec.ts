import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBarcosComponent } from './lista-barcos.component';

describe('ListaBarcosComponent', () => {
  let component: ListaBarcosComponent;
  let fixture: ComponentFixture<ListaBarcosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaBarcosComponent]
    });
    fixture = TestBed.createComponent(ListaBarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
