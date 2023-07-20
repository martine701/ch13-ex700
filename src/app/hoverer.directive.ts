import { Directive , Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[hoverer]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HovererDirective {
  @Input() hoverer: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  onMouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'color',
      this.hoverer
    );
  }

  onMouseLeave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'color',
      'black'
    );
  }
}
