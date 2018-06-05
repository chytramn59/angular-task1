import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { myServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	userVal: String;
  constructor(private router: Router, private MyServiceService: myServiceService) { }

  ngOnInit() {
  }

  mySave(){
  	this.MyServiceService.saveToService(this.userVal);
  }


}

