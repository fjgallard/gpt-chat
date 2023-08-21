import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
  private serverUrl: string = environment.serverURL;
  constructor(@Inject(PLATFORM_ID) public platformId: any) {}

  public appendBaseUrl(endpoint: string): string {
    return this.serverUrl + endpoint;
  }
}
