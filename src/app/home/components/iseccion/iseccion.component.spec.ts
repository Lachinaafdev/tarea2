import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISeccionComponent } from './iseccion.component';

describe('ISeccionComponent', () => {
  let component: ISeccionComponent;
  let fixture: ComponentFixture<ISeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
