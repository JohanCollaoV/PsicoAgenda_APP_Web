import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MantendorcitasPage } from './mantendorcitas.page';

describe('MantendorcitasPage', () => {
  let component: MantendorcitasPage;
  let fixture: ComponentFixture<MantendorcitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MantendorcitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
