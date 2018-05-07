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

export const message = (validator: ValidationResult, key: string): string => {
  switch (key) {
    case 'required':
      return 'Please enter a value';
    case 'pattern':
      return 'Value does not match required pattern';
    case 'minlength':
      return 'Value must be 5 characters';
    case 'maxlength':
      return 'Value must be a maximum of N characters';
  }


  switch (typeof validator[key]) {
    case 'string':
      return <string>validator[key];
    default:
      return `Validation failed: ${key}`;
  }
};