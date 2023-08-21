import { Component } from '@angular/core';
import { BreakpointsService } from 'src/app/core/services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  isXSmall$ = this.breakpointsService.isXSmall$;
  isSmall$ = this.breakpointsService.isSmall$;
  isMedium$ = this.breakpointsService.isMedium$;
  isLarge$ = this.breakpointsService.isLarge$;
  isXLarge$ = this.breakpointsService.isXLarge$;

  constructor(private breakpointsService: BreakpointsService) {}
}
