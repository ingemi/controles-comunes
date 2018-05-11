import { 
    Component, 
    OnInit, 
    ViewEncapsulation, 
    Optional}             from '@angular/core';
import { 
    FormBuilder, 
    Validators, 
    FormGroupDirective}                    from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector                          : 'app-range',
  templateUrl                       : './range.component.html',
  styleUrls                         : ['./range.component.scss'],
  encapsulation                     : ViewEncapsulation.None
})

export class RangeComponent extends BaseComponent<any> implements OnInit {

    min                :number      = undefined;
    max                :number      = undefined;
    showValuePrefix    :string      = "";
    showValueSufix     :string      = "";
    decorated_model    :string      = "";
    sufix              :string      = "";
    prefix             :string      = "";
    showValue          :boolean     = false;
    labels             :any         = undefined; 

    constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
        super(_parentFormGroup,_formBuilder);
      }
    
   /*  onSliderChange(event) {
        this.decorated_model        = this.showModelDecorator(event.value);
        //super.onChange(event.value);
    }; */

   /*  showModelDecorator(value:string=""){
        value = (this.labels)?this.labels[Number(value)/Number(this.step)]:value;
        return this.showValuePrefix+value+this.showValueSufix;
    } */

    focus(){
        if(!this.focusElement) this.focusElement['focus']();
    }
}
