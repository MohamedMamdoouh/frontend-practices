import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title and navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Unit-Testing');
    expect(compiled.querySelector('.app-nav')?.textContent).toContain('Home');
    expect(compiled.querySelector('.app-nav')?.textContent).toContain('About');
  });

  it('should redirect the empty path to home', async () => {
    await router.navigateByUrl('/');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/home');
    expect(compiled.textContent).toContain('home works!');
  });

  it('should navigate to the about page', async () => {
    await router.navigateByUrl('/about');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/about');
    expect(compiled.querySelector('[data-testid="about-title"]')?.textContent).toContain(
      'About Page',
    );
  });
});
