import { Component, OnInit,Input } from '@angular/core';
import {MessageModel} from '../../models/MessageModel';
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {


  @Input() messageModel:MessageModel=<MessageModel>{};
  constructor() { }

  ngOnInit(): void {
  }

}
