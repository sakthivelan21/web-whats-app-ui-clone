import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppPageComponent } from './whats-app-page.component';

describe('WhatsAppPageComponent', () => {
  let component: WhatsAppPageComponent;
  let fixture: ComponentFixture<WhatsAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
