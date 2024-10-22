import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayout2Component } from './main-layout2.component';

describe('MainLayout2Component', () => {
  let component: MainLayout2Component;
  let fixture: ComponentFixture<MainLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayout2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
