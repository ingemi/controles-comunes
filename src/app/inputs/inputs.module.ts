import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateComponent } from './date/date.component';
import { NumberComponent } from './number/number.component';
import { RadioComponent } from './radio/radio.component';
import { RangeComponent } from './range/range.component';
import { SelectComponent } from './select/select.component';
import { TimeComponent } from './time/time.component';
import { InputNumberComponent } from './input-number/input-number.component';


@NgModule({
  declarations: [
    InputTextComponent,
    // DateComponent,
    // NumberComponent,
    // RadioComponent,
    // RangeComponent,
    // SelectComponent,
    // TimeComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    InputTextComponent,
    // DateComponent,
    // NumberComponent,
    // RadioComponent,
    // RangeComponent,
    // SelectComponent,
    // TimeComponent,
    InputNumberComponent
  ],
  providers: []
})
export class InputsModule { }
