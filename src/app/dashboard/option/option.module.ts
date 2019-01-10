import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionRoutingModule } from './option-routing.module';
import { OptComponent } from './opt/opt.component';

@NgModule({
  declarations: [OptComponent],
  imports: [
    CommonModule,
    OptionRoutingModule
  ]
})
export class OptionModule { }
