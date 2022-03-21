import { Component, OnInit,ViewChild ,ElementRef,HostListener} from '@angular/core';

@Component({
  selector: 'app-chat-list-header',
  templateUrl: './chat-list-header.component.html',
  styleUrls: ['./chat-list-header.component.css']
})
export class ChatListHeaderComponent implements OnInit {

  toggleValue:boolean=false;
    
  @ViewChild('menu') menu:ElementRef | null |any = null;
  
  
  constructor() {
  		
   }

  ngOnInit(): void {
  		
  }
  
  @HostListener('document:click', ['$event.target'])
	public onClick(target:any) {
	  if(this.menu)
	  {
		  const clickedInside = this.menu.nativeElement.contains(target);
		  if (!clickedInside) {
			// this click event from outside
			console.log('you clicked outside the menu');
		  }
		  else
		  {
		  	console.log('you clicked the menu');
		  	this.toggleButtonState();
		  }
	  }
	}
  
  toggleButtonState():void
  {
  	
  	 this.toggleValue = !this.toggleValue;
  	 console.log(this.toggleValue);
  }
  
  
}
