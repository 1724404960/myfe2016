import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  template:`
  	<div class="panel panel-default">
		<div class="panel-heading">Demo3</div>
		<div class="panel-body">
			<div appCollapseOnClick class="jumbotron">
			  <h1>Directives</h1>
			  <p class="collapsible-section">给两个元素加公共的样式给它的父元素，为了方便嘛，但并不是所有的子元素都会继承父元素的属性有的属性继承，
8.要是一个盒子里面放左右两张img,先给两个img浮动变成一行</p>
			  <p><button class="btn btn-primary btn-lg">哎吆不错啊</button></p>
			</div>
		</div>
	</div>
  `,
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
