import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSinSesionComponent } from './news-sin-sesion.component';

describe('NewsSinSesionComponent', () => {
  let component: NewsSinSesionComponent;
  let fixture: ComponentFixture<NewsSinSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSinSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSinSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
