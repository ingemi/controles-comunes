import { ControlValueAccessor, NgModel, Validators, FormGroupDirective, FormGroup, FormControl, AbstractControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {
    AsyncValidatorArray,
    ValidatorArray,
    ValidationResult,
    message,
    validate,
} from './utils';
import { Input, OnInit } from '@angular/core';


export abstract class BaseComponent<T> implements ControlValueAccessor, OnInit {

    protected abstract model: NgModel;
    private innerValue: T;
    protected innerFormControl:FormControl = new FormControl();

    @Input() config: any;
    @Input() validators:Array<any>;
    @Input() labelText: string;


    propagateChange = (_: any) => {};
    propagateTouch = () => {};

    constructor(private parentFormGroup:FormGroupDirective,formBuilder:FormBuilder) {
        
    }
    
    ngOnInit() {
        this.initialize();
    }

    initialize(){
        this.validate();
        this.parentFormGroup.ngSubmit.subscribe(
          res => {
              this.markAsDirty()
          }
        )

        this.innerFormControl.setValidators(this.config.validators.map(res => {;
            return res.validator;
        }));        
    }

    get value(): T {
        return this.innerValue;
    }

    set value(value: T) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.propagateChange(this.innerValue);
        }
    }

    touch() {
        this.propagateTouch()
    }

    writeValue(value: T) {
        if(value) {
            this.innerFormControl.setValue(value);
        }
    }

    registerOnChange(fn: (value: T) => void) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.propagateTouch = fn;
    }

    public validate() { 
        this.innerFormControl.setValue(this.innerValue);
        return this.innerFormControl.errors;
    }

    protected get invalid() {
     if(this.innerFormControl.dirty) {
        return this.validate();
     }
    }

    protected get failures() {
		let messages = [];
        for(let validation in this.validate()){
            let msjPushed = false;
			this.config.validators.forEach(element => {
                if(!msjPushed) {
                    messages.push(message(element.message,validation))
                    msjPushed = true;
                }
			});
        }
        return messages;   
    }

    markAsDirty(){
        this.innerFormControl.markAsDirty();
        this.validate();
    }
}
