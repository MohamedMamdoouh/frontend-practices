import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `
    <p id="custom" [appHighlight]="'lightblue'">Custom highlight</p>
    <p id="default" appHighlight>Default highlight</p>
  `,
  imports: [HighlightDirective],
})
class TestHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveElement = fixture.debugElement.query(By.directive(HighlightDirective));
    const directive = directiveElement.injector.get(HighlightDirective);

    expect(directive).toBeTruthy();
  });

  it('should apply the provided color on mouse enter', () => {
    const paragraph = fixture.debugElement.query(By.css('#custom'));

    paragraph.triggerEventHandler('mouseenter');
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toBe('lightblue');
  });

  it('should apply the default color when no value is provided', () => {
    const paragraph = fixture.debugElement.query(By.css('#default'));

    paragraph.triggerEventHandler('mouseenter');
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should clear the color on mouse leave', () => {
    const paragraph = fixture.debugElement.query(By.css('#custom'));

    paragraph.triggerEventHandler('mouseenter');
    fixture.detectChanges();
    paragraph.triggerEventHandler('mouseleave');
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toBe('');
  });
});
