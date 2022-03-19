import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiddleContainerComponent } from './home-middle-container.component';

describe('HomeMiddleContainerComponent', () => {
  let component: HomeMiddleContainerComponent;
  let fixture: ComponentFixture<HomeMiddleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMiddleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMiddleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
