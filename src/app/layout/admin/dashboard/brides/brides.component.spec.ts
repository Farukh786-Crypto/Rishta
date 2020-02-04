import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesComponent } from './brides.component';

describe('BridesComponent', () => {
  let component: BridesComponent;
  let fixture: ComponentFixture<BridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
