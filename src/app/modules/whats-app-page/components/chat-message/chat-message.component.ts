import { Component, OnInit } from '@angular/core';
import {MessageModel } from '../../models/MessageModel';
@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  constructor() { }
  
  messageModels:Array<MessageModel>=[
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'send'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'receive'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'send'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'receive'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'send'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'receive'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'send'
  	},
  	{	
  		message: "Hi sakthi !!! you look handsome !!!",
  		time:'09.43 pm',
  		state:'receive'
  	},
  ]

  ngOnInit(): void {
  }

}
