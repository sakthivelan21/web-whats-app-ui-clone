import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../models/LinkModel';

@Component({
  selector: 'app-home-middle-container',
  templateUrl: './home-middle-container.component.html',
  styleUrls: ['./home-middle-container.component.css']
})
export class HomeMiddleContainerComponent implements OnInit {

  links:Array<LinkModel> = [
  	
  	{
  		"link":"/login",
  		"text":"Go to Login Page"
  	},
  	{
  		"link":"/whats-app",
  		"text":"Go to Whats App"
  	}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
