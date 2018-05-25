import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Hero} from '../hero';
@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent {

 powers = ['', '',
 '', ''];

 name = '';
 language = '';
 values: any = [];
 onSubmit(form) { 
 if(form.valid) {
 this.values.push({name: this.name, language: this.language});
 form.reset()
 }
 }



}