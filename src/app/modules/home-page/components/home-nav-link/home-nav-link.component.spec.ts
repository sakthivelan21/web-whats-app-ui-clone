import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavLinkComponent } from './home-nav-link.component';

describe('HomeNavLinkComponent', () => {
  let component: HomeNavLinkComponent;
  let fixture: ComponentFixture<HomeNavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
