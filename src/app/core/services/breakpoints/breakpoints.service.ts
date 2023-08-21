import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {

  private breakpointObserver = inject(BreakpointObserver);

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  isSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  isMedium$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  isLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  isXLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XLarge)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor() { }
}
