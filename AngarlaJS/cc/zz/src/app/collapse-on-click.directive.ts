import { Directive ,HostBinding,HostListener,Input,Output,EventEmitter} from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]'
})
export class CollapseOnClickDirective {
	isCollapsed=false;

	@HostBinding("class.collapsed")
	get collapsed(){
		return this.isCollapsed;
	}

	@HostListener('click')
	toggle(){
		this.isCollapsed= !this.isCollapsed;
	}
  constructor() { }

}
