import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { HistoryComponent } from './components/history/history.component';
import { ConversationComponent } from './components/conversation/conversation.component';


@NgModule({
  declarations: [
    ChatComponent,
    HistoryComponent,
    ConversationComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
