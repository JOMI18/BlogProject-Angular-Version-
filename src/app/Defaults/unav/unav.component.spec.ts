import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavComponent } from './unav.component';

describe('UnavComponent', () => {
  let component: UnavComponent;
  let fixture: ComponentFixture<UnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
