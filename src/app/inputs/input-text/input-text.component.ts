import {Component, Input, Optional, Inject, ViewChild, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgModel, NgForm, FormGroupDirective} from '@angular/forms';
import { BaseComponent } from '../base.component';
import {
    AsyncValidatorArray,
    ValidatorArray,
    ValidationResult,
    message,
    validate,
} from '../utils';

@Component({
  selector: 'nrj-input-text',
  templateUrl: './input-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => InputTextComponent), 
      multi: true
    },
    {
      provide:NG_VALIDATORS,
      useExisting: forwardRef(() => InputTextComponent),
      multi:true
    }
  ],
})
export class InputTextComponent extends BaseComponent<string>{

    @ViewChild(NgModel) model: NgModel;



    constructor(@Optional() private _parentFormGroup: FormGroupDirective){
      super(_parentFormGroup);
    }
    
    
}  