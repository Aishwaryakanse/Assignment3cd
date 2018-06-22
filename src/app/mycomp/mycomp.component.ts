import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  template:`<h1>{{fun()}}</h1>
            <h1>{{fun().length}}</h1>
            <h1>{{fun().toUpperCase()}}</h1><br>
            <div><h2>
            {{name}}</h2></div>
            <button class='btn' (click)="fun1()">ok</button> 
            
            ` ,
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  
  public uname='angular'
  public name='Aishwarya'
  

  constructor() { }

  ngOnInit() {
  }
  /**
   * name
   */
  
  public fun1() 
  {
    
    this.name='Kanse';
    console.log("hello !!!!"+this.name);
    
    
  }

  public fun()
  {
     
     return this.uname="angular";
     
  }
}
