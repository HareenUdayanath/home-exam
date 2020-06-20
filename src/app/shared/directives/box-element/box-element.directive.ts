import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBoxElement]',
  exportAs: 'appBoxElement'
})
export class BoxElementDirective implements OnChanges {

  @Input() height: string;
  @Input() width: string;
  @Input() color: string;

  constructor(private elementRef: ElementRef) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.height = this.height;
    this.elementRef.nativeElement.style.width = this.width;
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

}
