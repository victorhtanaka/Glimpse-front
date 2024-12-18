import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWithMenuComponent } from './body-with-menu.component';

describe('BodyWithMenuComponent', () => {
  let component: BodyWithMenuComponent;
  let fixture: ComponentFixture<BodyWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
