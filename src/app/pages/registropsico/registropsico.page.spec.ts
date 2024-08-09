import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistropsicoPage } from './registropsico.page';

describe('RegistropsicoPage', () => {
  let component: RegistropsicoPage;
  let fixture: ComponentFixture<RegistropsicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropsicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
