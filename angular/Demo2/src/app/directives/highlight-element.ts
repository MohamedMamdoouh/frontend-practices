import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
})
export class HighlightElement implements OnChanges {
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'grey';
  }
  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = 'grey';
  }

  @Input() externalColor: string = '';

  @Input('appHighlightElement') defaultColor: string = '';

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = this.externalColor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
