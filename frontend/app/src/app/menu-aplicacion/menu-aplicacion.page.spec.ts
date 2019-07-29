import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAplicacionPage } from './menu-aplicacion.page';

describe('MenuAplicacionPage', () => {
  let component: MenuAplicacionPage;
  let fixture: ComponentFixture<MenuAplicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAplicacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
