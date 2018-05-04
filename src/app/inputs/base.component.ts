import { ControlValueAccessor, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import {
    AsyncValidatorArray,
    ValidatorArray,
    ValidationResult,
    message,
    validate,
} from './utils';


export abstract class BaseComponent<T> implements ControlValueAccessor {

    protected abstract model: NgModel;
    private innerValue: T;


    private changed = new Array<(value: T) => void>();
    private touched = new Array<() => void>();

    constructor(private _validators: ValidatorArray, private _asyncValidators: AsyncValidatorArray) { }



    get value(): T {
        return this.innerValue;
    }


    set value(value: T) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.changed.forEach(f => f(value));
        }
    }


    touch() {
        this.touched.forEach(f => f());
    }


    writeValue(value: T) {
        this.innerValue = value;
    }


    registerOnChange(fn: (value: T) => void) {
        this.changed.push(fn);
    }


    registerOnTouched(fn: () => void) {
        this.touched.push(fn);
    }

    protected validate(): Observable<any> {
        return validate
            (this._validators, this._asyncValidators)
            (this.model.control);
    }


    protected get invalid(): Observable<boolean> {
        return this.validate().map(v => Object.keys(v || {}).length > 0);
    }


    protected get failures(): Observable<Array<string>> {
        return this.validate().map(v => Object.keys(v).map(k => message(v, k)));
    }
}