import { Injectable } from '@angular/core';

@Injectable()
export class myServiceService {
  var1: String;
  var2: String;
  userInput: String;
  constructor() { 

  }

  saveToService(userVal) {
    this.userInput = userVal;
    console.log("hiii");
  }

  getFromService(){
    return this.userInput;
  }
  tabledatasave(name,language){
this.var1=name;
this.var2= language;
  }
  tabledataget(){
    return this.var1;
  }
  tabledatasget(){
    return this.var2;
  }
}

 