import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appBmcIf]'
})
export class BmcIfDirective {

  private temaple:TemplateRef<any>
  private container:ViewContainerRef

  
  constructor(temaple:TemplateRef<any>, container:ViewContainerRef) {
    this.temaple = temaple;    
    this.container = container;    
   }

  @Input()
  private set appBmcIf(value:boolean){
    if(value === true){
      this.container.createEmbeddedView(this.temaple);  
    } else {
      this.container.clear();
    }
  };

}
