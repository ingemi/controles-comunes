import { ControlValueAccessor, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import {
    AsyncValidatorArray,
    ValidatorArray,
    ValidationResult,
    message,
    validate,
} from './utils';
import { Input } from '@angular/core';


export abstract class BaseComponent<T> implements ControlValueAccessor {

    protected abstract model: NgModel;
    private innerValue: T;
    @Input() validators:Array<any>;


    propagateChange = (_: any) => {};
    propagateTouch = () => {};

    constructor() { }



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
        this.innerValue = value;
    }


    registerOnChange(fn: (value: T) => void) {
        this.propagateChange = fn;
    }


    registerOnTouched(fn: () => void) {
        this.propagateTouch = fn;
    }

    public validate() {        
        return validate
            (this.validators)
            (this.model.control);
    }


    protected get invalid() {
        return this.validate();
    }


    protected get failures() {
        let messages = [];
        for(let validation in this.validate()){
            messages.push(message(null,validation))
        }
        return messages;
    }
}