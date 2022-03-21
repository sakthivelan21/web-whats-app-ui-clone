import { Component, OnInit,Input } from '@angular/core';
import { ChatPreviewModel } from '../../models/ChatPreviewModel';
@Component({
  selector: 'app-chat-preview-display',
  templateUrl: './chat-preview-display.component.html',
  styleUrls: ['./chat-preview-display.component.css']
})
export class ChatPreviewDisplayComponent implements OnInit {

  constructor() { }
  
  @Input() chatDetail:ChatPreviewModel=<ChatPreviewModel>{};

  ngOnInit(): void {
  }

}
