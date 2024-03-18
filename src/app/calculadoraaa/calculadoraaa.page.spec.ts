import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraaaPage } from './calculadoraaa.page';

describe('CalculadoraaaPage', () => {
  let component: CalculadoraaaPage;
  let fixture: ComponentFixture<CalculadoraaaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculadoraaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
