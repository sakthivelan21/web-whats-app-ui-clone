import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatSearchBarComponent } from './app-chat-search-bar.component';

describe('AppChatSearchBarComponent', () => {
  let component: AppChatSearchBarComponent;
  let fixture: ComponentFixture<AppChatSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChatSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChatSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
