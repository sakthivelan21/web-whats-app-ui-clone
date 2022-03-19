import { Component, OnInit,Input } from '@angular/core';
import { LinkModel } from '../../models/LinkModel';
@Component({
  selector: 'app-home-nav-link',
  templateUrl: './home-nav-link.component.html',
  styleUrls: ['./home-nav-link.component.css']
})
export class HomeNavLinkComponent implements OnInit {

  @Input('linkModel')	
  linkModel:LinkModel =<LinkModel>{};
  constructor() { }

  ngOnInit(): void {
  }

}
