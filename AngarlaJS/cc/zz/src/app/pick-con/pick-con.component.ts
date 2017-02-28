import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pick-con',
  //templateUrl: './pick-con.component.html',
  template:`
              <div class="row">
              <div class="form-control" [ngStyle]="{'text-align':'center','color':color}">颜色预览</div>
              </div>
  `,

  styleUrls: ['./pick-con.component.css']
})
export class PickConComponent implements OnInit {
      @Input("color")
      color:string;
  constructor() { }

  ngOnInit() {
  }

}
