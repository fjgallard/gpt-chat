import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { HistoryComponent } from './components/history/history.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ModelResponseComponent } from './components/model-response/model-response.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserQueryComponent } from './components/user-query/user-query.component';


@NgModule({
  declarations: [
    ChatComponent,
    HistoryComponent,
    ConversationComponent,
    ModelResponseComponent,
    UserQueryComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
  ]
})
export class ChatModule { }
