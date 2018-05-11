import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Base } from '../base';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends Base implements OnInit {

  constructor(fBuilder: FormBuilder,elementRef:ElementRef) {
    super(fBuilder);
  }

  ngOnInit() {
    super.beforeInit();

    let validatorsDictionary    = {
        'required'              : Validators.required
    };

    super.afterInit(validatorsDictionary);
  }

  focus(){
    if(!this.focusElement) this.focusElement['focus']();
  }
}

