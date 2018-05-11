import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { OriginacionService } from '../../services/originacion.service';

import { Base } from '../base';

@Component({
  selector: 'app-double-select',
  templateUrl: './double-select.component.html',
  styleUrls: ['./double-select.component.css']
})
export class DoubleSelectComponent extends Base implements OnInit {

  @ViewChild('focusElement1') focusElement1:ElementRef;
  @ViewChild('focusElement2') focusElement2:ElementRef;

  constructor(fBuilder: FormBuilder, private originacionService: OriginacionService,private router: Router) {
    super(fBuilder);
  }

  arrayValue= [];
  first = true;

  ngOnInit() {
    super.beforeInit();   
    let validatorsDictionary    = {
        'required'              : Validators.required
    };

    
 
    super.afterInit(validatorsDictionary, "inputCtrlFirst");
    super.afterInit(validatorsDictionary, "inputCtrlSecond");

    /*  Condicion para cargar datos en el segundo Select.
        En caso de no venir cargado en el template.
    */
    
    if (this.items) {
      if(this.items[1].length===0){
        this.form.controls['inputCtrlSecond'].disable();
        this.onSelectChange(this.model[0],0); 
        setTimeout(()=>{        
          this.model[1]= this.arrayValue[1];
        }, 500, this)      
      }
    }
  }

  onSelectChange(e,i){    
    if(e==='')return;
    this.arrayValue[i] = e;    
    this.model[i]=e;
    if(i===0 && !this.first){      
      this.form.controls['inputCtrlSecond'].disable();
      this.arrayValue[1]='';
      this.model[1]='';
      let params = {provincia : e};
      this.originacionService.getGenericDataURL(this['url'],params).subscribe(data => {        
        let ciudades = [];
        if(data.success){
          if(data.data){
            for(let ciudad of data.data){
              ciudades.push({label: ciudad.nombre,value: ciudad.nombre});
            }
            this.items[1]=ciudades;  
            this.form.controls['inputCtrlSecond'].enable();    
          }          
        }else{
          console.log('ups ocurrio algo con el servicio de ciudades');
        }
      }, err => {        
        this.router.navigate(['/call']);
      });	           
    } 
    this.first = false; 
    super.onChange(JSON.stringify(this.arrayValue));
  }

  focus(){
    if(!this.formGroupObj['inputCtrlFirst'].valid)    this.focusElement1['focus']();

    if(!this.formGroupObj['inputCtrlSecond'].valid)    this.focusElement2['focus']();
  }
}