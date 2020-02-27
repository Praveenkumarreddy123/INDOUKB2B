import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpprotunitesComponent } from './opprotunites.component';

describe('OpprotunitesComponent', () => {
  let component: OpprotunitesComponent;
  let fixture: ComponentFixture<OpprotunitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpprotunitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpprotunitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
