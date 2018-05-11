import {Component, Input, Optional, Inject, ViewChild, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgModel, NgForm, FormGroupDirective, FormBuilder} from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'nrj-input-number',
  templateUrl: './input-number.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => InputNumberComponent), 
      multi: true
    },
    {
      provide:NG_VALIDATORS,
      useExisting: forwardRef(() => InputNumberComponent),
      multi:true
    }
  ],
})
export class InputNumberComponent extends BaseComponent<string>{

    @ViewChild(NgModel) model: NgModel;



    constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
      super(_parentFormGroup,_formBuilder);
    }
    
    
}  