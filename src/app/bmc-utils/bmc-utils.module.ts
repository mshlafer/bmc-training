import { Logger } from './logger';
import { NgModule } from '@angular/core';
import { BmcUpPipe } from './bmc-up.pipe';
import { BmcIfDirective } from './bmc-if.directive';
import { MarkerDirective } from './marker.directive';

@NgModule({
  providers   : [Logger],
  declarations: [BmcUpPipe, BmcIfDirective, MarkerDirective],
  exports     : [BmcUpPipe, BmcIfDirective, MarkerDirective]
})

export class BmcUtilsModule { }
