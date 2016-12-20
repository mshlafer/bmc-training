import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {
  private element: ElementRef;
  private renderer: Renderer;

  constructor(element: ElementRef, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
   }

   @HostListener('mouseover')
   private setBackground(){
     this.renderer.setElementStyle(this.element.nativeElement,'background-color','yellow');
   }

   @HostListener('mouseleave')
   private removeBackground(){
     this.renderer.setElementStyle(this.element.nativeElement,'background-color','');
   }


}
