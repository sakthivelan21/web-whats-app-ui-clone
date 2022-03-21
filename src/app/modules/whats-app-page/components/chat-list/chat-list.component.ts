import { Component, OnInit } from '@angular/core';
import { ChatPreviewModel } from '../../models/ChatPreviewModel';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor() { }
  
  chatDetails:Array<ChatPreviewModel>=[
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	},
  	{
  		userName:'Sakthi Velan',
  		lastMessage:'bye nanba',
  		time:'09.23pm'
  	}
  ]

  ngOnInit(): void {
  }

}
