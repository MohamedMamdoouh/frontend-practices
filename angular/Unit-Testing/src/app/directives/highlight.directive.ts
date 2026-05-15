import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  private readonly defaultColor = 'yellow';

  @Input('appHighlight') highlightColor = '';

  @HostBinding('style.backgroundColor') backgroundColor = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor || this.defaultColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }
}