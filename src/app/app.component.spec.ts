import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcercaDeComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AcercaDeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AcercaDeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Colegio2'`, () => {
    const fixture = TestBed.createComponent(AcercaDeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Colegio2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AcercaDeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Colegio2 app is running!');
  });
});
