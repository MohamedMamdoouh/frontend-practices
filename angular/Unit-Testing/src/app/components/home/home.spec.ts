import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const title = el.nativeElement.querySelector('h1');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('test');
  });

  it('should have a disabled button', () => {
    const button = el.queryAll(By.css('.btn'))[0];
    expect(button).toBeTruthy();
    expect(button.nativeElement.disabled).toBe(true);
  });

  it('should have an image with alt text', () => {
    const img = el.queryAll(By.css('img'))[0];
    expect(img).toBeTruthy();
    expect(img.attributes['alt']).toBe('test image');
  });

  it('should toggle subscription status on button click', async () => {
    vi.useFakeTimers();

    try {
      const button = el.queryAll(By.css('.btn'))[1];
      expect(button).toBeTruthy();
      expect(component.isSubscribed()).toBe(false);

      button.nativeElement.click();
      await vi.runAllTimersAsync();
      await fixture.whenStable();

      expect(component.isSubscribed()).toBe(true);
      expect(el.queryAll(By.css('.btn'))[1].nativeElement.disabled).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });

  // testing promises
  it('should resolve a promise', async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved value');
      }, 1000);
    });

    vi.useFakeTimers();

    try {
      const promiseResult = await promise;
      expect(promiseResult).toBe('resolved value');
    } finally {
      vi.useRealTimers();
    }
  });
});
