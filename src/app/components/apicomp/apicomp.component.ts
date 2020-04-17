import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';


@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.css']
})
export class ApicompComponent implements OnInit {
 

  constructor(public apiService:Service1Service) { }

  ngOnInit() {
  }
 submit(){
  this.apiService.getData().subscribe(res=>
    {
      console.log(res);
    })
}
}
