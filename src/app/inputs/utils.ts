import {
  AbstractControl,
  Validator,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';


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

export const message = (message: any, key: string): string => {
  
  switch (key) {
    case 'required':
      return message? message : 'Por favor, ingrese un valor';
    case 'pattern':
      return message? message : "Value does not match required pattern";
    case 'minlength':
      return message? message : 'Value must be 5 characters';
    case 'maxlength':
      return message?  message :  'Value must be a maximum of N characters';
    case 'min':
      return message?  message :  'maximo';
    case 'max':
      return message?  message :  'minimo';
    case 'customValidator':
      return message? message : 'Message from customValidator';
  }
};

export class BaseValidator {
  validator: Validators;
  message: string;
  key: string;
   constructor(validators, message, key) {
      this.validator = validators.validator;
      this.message = message.message;
      this.key = key.key;
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



export class InputBaseControl {
  name: any;
  validator: Array<BaseValidator> = [];
  label: string;
  placeholder: string;
  className: string;
   pSetName(name: string) {
    this.name = name;
   }
   pSetValidador(validador: BaseValidator) {
     this.validator.push(validador);
   }
   pSetLabel(label: string) {
    this.label = label;
   }
   pSetPlaceholder(placeholder: string) {
     this.placeholder = placeholder;
   }
   pSetClassName(className: string) {
     this.className = className; 
   }
}

export class InputNumber extends InputBaseControl {
  step: number;
  constructor() {
    super();
  }
  pSetStep(step: number) {
    this.step = step;
  }
}




