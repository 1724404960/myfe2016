import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
//import { SimpleFormComponent } from './simple-form.component';
@Component({
  selector: 'app-simple-form',
  //Url: './simple-form.component.html',
  template:`
            <div class="row" [ngStyle]="{'text-align':'center','color':color}">颜色设置</div>
            <div class="row">
              <div class="col-sm-6">
                <button class="btn btn-danger btn-block" (click)="choose('red')">红色</button>
              </div>
              <div class="col-sm-6">
                <button class="btn btn-primary btn-block" (click)="choose('blue')">蓝色</button>
              </div>
            </div>
  `,

  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Input("color")
  color:string;
  @Output("color") colorOutput=new EventEmitter
  choose(color){
    this.color=color;
    //该函数参数中的color是指点哪个，获取到哪个的颜色，
    //而前面的指的是颜色设置的属性
    //console.log(color)
    this.colorOutput.emit(color);

  }
  reset(color){
    this.color="black";
    //this.choose("black");
  }
  constructor() { }

  ngOnInit() {
  }

}
