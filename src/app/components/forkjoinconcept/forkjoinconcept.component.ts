import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-forkjoinconcept',
  templateUrl: './forkjoinconcept.component.html',
  styleUrls: ['./forkjoinconcept.component.css']
})
export class ForkjoinconceptComponent implements OnInit {
  res1;
  res2;
  constructor(public apiService:Service1Service) { }

  ngOnInit() {
  //   this.apiService.getfork().subscribe((x)=>{
  //     console.log(x),
  //     (err)=>{
  //       console.log("error");
  //     }
  //   })


  this.apiService.getfork();
  }

}
