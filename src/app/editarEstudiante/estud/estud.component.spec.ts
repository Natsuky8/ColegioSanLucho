import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstudiantesComponent } from './estud.component';

describe('EditarEstudienesComponent', () => {
  let component: EditarEstudiantesComponent;
  let fixture: ComponentFixture<EditarEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
