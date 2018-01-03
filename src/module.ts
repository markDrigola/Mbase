import { NgModule } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule { }
