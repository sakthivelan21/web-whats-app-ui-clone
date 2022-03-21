import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPreviewDisplayComponent } from './chat-preview-display.component';

describe('ChatPreviewDisplayComponent', () => {
  let component: ChatPreviewDisplayComponent;
  let fixture: ComponentFixture<ChatPreviewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatPreviewDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPreviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
