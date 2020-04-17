import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
 res1;
 res2;
  constructor(public http:HttpClient) { }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')       //http by default returns a type observable 
    //return this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise     //type changed to promise
  }

  getfork(){
    this.res1= this.http.get('../assets/data1.json')
  this.res2= this.http.get('../assets/data2.json');
  forkJoin([this.res1,this.res2]).subscribe(res=>{
    console.log("response", this.res1, this.res2)},
    error=>{
      console.log("error");
    }
  );
  
  }
}


