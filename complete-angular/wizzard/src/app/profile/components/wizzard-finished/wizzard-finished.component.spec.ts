import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizzardFinishedComponent } from './wizzard-finished.component';

describe('WizzardFinishedComponent', () => {
  let component: WizzardFinishedComponent;
  let fixture: ComponentFixture<WizzardFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizzardFinishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizzardFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
