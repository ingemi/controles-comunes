import {
  AbstractControl,
  Validator,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';


export type ValidationResult = { [validator: string]: string | boolean };


export type AsyncValidatorArray = Array<Validator>;


export type ValidatorArray = Array<Validator | ValidatorFn>;


const normalizeValidator =  (validator: Validator | ValidatorFn): ValidatorFn => {
    const func = (validator as Validator).validate.bind(validator);
    if (typeof func === 'function') {
      return (c: AbstractControl) => func(c);
    } else {
      return <ValidatorFn>validator;
    }
  };


export const composeValidators = (validators):  ValidatorFn => {
    if (validators == null || validators.length === 0) {
      return null;
    }
    return Validators.compose(validators);
  };


export const validate = (validators: ValidatorArray) => {
  return (control: AbstractControl) => {
    const synchronousValid = () => composeValidators(validators)(control);

    if (validators) {
      return synchronousValid();
    } 
    return null;
  };
};

export const message = (validator: any, key: string): string => {

  switch (key) {
    case 'required':
      return validator? validator : 'Please enter a value';
    case 'pattern':
      return validator? validator : "Value does not match required pattern";
    case 'minlength':
      return validator? validator : 'Value must be 5 characters';
    case 'maxlength':
      return validator?  validator :  'Value must be a maximum of N characters';
    case 'customValidator':
      return validator? validator : 'Message from customValidator';
  }


  switch (typeof validator[key]) {
    case 'string':
      return <string>validator[key];
    default:
      return `Validation failed: ${key}`;
  }
};

export class BaseValidator {
  validator: Validators;
  message: string;
   constructor(validators, message) {
      this.validator = validators.validator;
      this.message = message.message;
   }
}

export class FormBaseControl {
  name: any;
  validator: Array<BaseValidator>;
  label: string;
  placeholder: string;
  className: string;
  step? : number;
   constructor(control, label, className , placeholder, validator, pStep?) {
      this.name = control.controlName;
      this.validator = validator.validators;
      this.label = label.labelText;
      this.placeholder = placeholder.placeholder;
      this.className = className.extraClass;
      this.step = pStep !== undefined ? pStep.step : null;
   }
}





export function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== "" && control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
          return { 'customValidator': true };
      }
      return null;
  };
}