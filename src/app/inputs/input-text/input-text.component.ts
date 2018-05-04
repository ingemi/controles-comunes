import {Component, Input, Optional, Inject, ViewChild} from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgModel} from '@angular/forms';
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
    {provide: NG_VALUE_ACCESSOR, useExisting: InputTextComponent, multi: true}
  ],
})
export class InputTextComponent extends BaseComponent<string>{

    @ViewChild(NgModel) model: NgModel;

    constructor(
                @Optional() @Inject(NG_VALIDATORS) private validators: ValidatorArray,
                @Optional() @Inject(NG_VALIDATORS) private asyncValidators: AsyncValidatorArray){
        super(validators,asyncValidators);
    }

    validate() {
        return validate(this.validators, this.asyncValidators)(this.model.control);
      }
}  