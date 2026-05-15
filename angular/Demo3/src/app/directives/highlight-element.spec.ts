import { HighlightElement } from './highlight-element';
import { ElementRef } from '@angular/core';

describe('HighlightElement', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new HighlightElement(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
