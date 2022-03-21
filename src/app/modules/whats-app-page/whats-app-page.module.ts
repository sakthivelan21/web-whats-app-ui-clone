import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsAppPageRoutingModule } from './whats-app-page-routing.module';
import { WhatsAppPageComponent } from './components/whats-app-page/whats-app-page.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatDisplayComponent } from './components/chat-display/chat-display.component';
import { MessageSendComponent } from './components/message-send/message-send.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatListHeaderComponent } from './components/chat-list-header/chat-list-header.component';
import { AppChatSearchBarComponent } from './components/app-chat-search-bar/app-chat-search-bar.component';
import { ChatPreviewDisplayComponent } from './components/chat-preview-display/chat-preview-display.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';


@NgModule({
  declarations: [
    WhatsAppPageComponent,
    ChatListComponent,
    ChatDisplayComponent,
    MessageSendComponent,
    ChatHeaderComponent,
    ChatListHeaderComponent,
    AppChatSearchBarComponent,
    ChatPreviewDisplayComponent,
    ChatMessageComponent,
    MessageBoxComponent,
  ],
  imports: [
    CommonModule,
    WhatsAppPageRoutingModule
  ]
})
export class WhatsAppPageModule { }
