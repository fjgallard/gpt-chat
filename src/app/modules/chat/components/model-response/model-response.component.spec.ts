import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelResponseComponent } from './model-response.component';

describe('ModelResponseComponent', () => {
  let component: ModelResponseComponent;
  let fixture: ComponentFixture<ModelResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelResponseComponent]
    });
    fixture = TestBed.createComponent(ModelResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
