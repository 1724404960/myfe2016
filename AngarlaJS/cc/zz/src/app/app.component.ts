import { Component } from '@angular/core';
import { MailService } from './mail.service';
@Component({
  selector: 'app-root',
  template:
      `
    <div class="container">
       <div class="panel panel-default">
          <div class="panel-heading">demo1</div>
          <div class="panel-body">
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="请输入内容" #myinput
                  value="{{mail.message}}" [(ngModel)]="mail.message">
             </div>
             <div class="col-md-6">
                <button class="btn btn-danger" (click)=Onclick(myinput.value)>显示</button>
              </div>
              {{mail.message}}
          </div>
       </div>
       <div class="panel panel-default">
          <div class="panel-heading">
          <h3 class="panel-title">demo2</h3>
          </div>
          <div class="panel-body">
             <app-simple-form color="yellow" #pick (color)="pickpcon.color=$event"></app-simple-form>
            <app-pick-con #pickpcon></app-pick-con>
            <div class="row">
    					<button class="btn btn-default btn-block" (click)="pick.reset()">重置</button>
    				</div>
          </div>
      </div>
      <app-d></app-d>
    </div>


  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  Onclick(value){
    console.log(value);
  }

  constructor(private mail:MailService){

  }
}
