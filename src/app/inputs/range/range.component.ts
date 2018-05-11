import { 
    Component, 
    OnInit, 
    ViewEncapsulation }             from '@angular/core';
import { 
    FormBuilder, 
    Validators }                    from '@angular/forms';
import { Base }                     from '../base';

@Component({
  selector                          : 'app-range',
  templateUrl                       : './range.component.html',
  styleUrls                         : ['./range.component.scss'],
  encapsulation                     : ViewEncapsulation.None
})

export class RangeComponent extends Base implements OnInit {

    min                :number      = undefined;
    max                :number      = undefined;
    showValuePrefix    :string      = "";
    showValueSufix     :string      = "";
    decorated_model    :string      = "";
    sufix              :string      = "";
    prefix             :string      = "";
    showValue          :boolean     = false;
    labels             :any         = undefined; 

    constructor(fBuilder: FormBuilder) { 
        super(fBuilder);
    }

    onSliderChange(event) {
        this.decorated_model        = this.showModelDecorator(event.value);
        super.onChange(event.value);
    };

    showModelDecorator(value:string=""){
        value = (this.labels)?this.labels[Number(value)/Number(this.step)]:value;
        return this.showValuePrefix+value+this.showValueSufix;
    }

    ngOnInit() {
        this.step                   = this.step     || 1;
        this.showValuePrefix        = this.prefix   || "";
        this.showValueSufix         = this.sufix    || "";
        this.model                  = this.model    || "0"
        this.labels                 = this.labels || undefined;
        this.decorated_model        = this.showModelDecorator(this.model);

        super.beforeInit();

        this.min                    = this.validations.min || 0;
        this.max                    = this.validations.max || 100;

        let validatorsDictionary    = {
            "required"              : Validators.required
        };

        // this.validations.required = true;

        super.afterInit(validatorsDictionary);
    }

    focus(){
        if(!this.focusElement) this.focusElement['focus']();
    }
}
