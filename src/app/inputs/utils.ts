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
      return 'Value must be a maximum of N characters';
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
   constructor(validator, message) {
      this.validator = validator;
      this.message = message;
   }
}

export class FormClassControl {
  name: string;
  validator: Array<BaseValidator>;
  label: string;
  placeholder: string;
  className: string;
   constructor(name, label, className , placeholder, validator) {
     this.name = name;
      this.validator = validator;
      this.label = label;
      this.placeholder = placeholder;
      this.className = className;

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