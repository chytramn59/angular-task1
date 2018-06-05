import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { myServiceService } from '../my-service.service';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent implements OnInit {
  uerInput: String;
  userName: String;
  language: String;
  values: any = [];

  constructor(private router:Router,private myServiceService: myServiceService) { }

  ngOnInit() {
    

    this.uerInput = this.myServiceService.getFromService();

  }

  onSubmit (form) {
    this.values.push(form.value);
     // this.server.save(this.values);
    form.reset();
  }
  // sav(){
  //   this.myServiceService.tabledatasave(name,language);

  // }

}
