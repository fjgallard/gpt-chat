import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQueryComponent } from './user-query.component';

describe('UserQueryComponent', () => {
  let component: UserQueryComponent;
  let fixture: ComponentFixture<UserQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserQueryComponent]
    });
    fixture = TestBed.createComponent(UserQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
