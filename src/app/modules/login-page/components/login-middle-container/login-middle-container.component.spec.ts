import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMiddleContainerComponent } from './login-middle-container.component';

describe('LoginMiddleContainerComponent', () => {
  let component: LoginMiddleContainerComponent;
  let fixture: ComponentFixture<LoginMiddleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMiddleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMiddleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
