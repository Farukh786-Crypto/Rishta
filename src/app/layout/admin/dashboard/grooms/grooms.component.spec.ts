import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomsComponent } from './grooms.component';

describe('GroomsComponent', () => {
  let component: GroomsComponent;
  let fixture: ComponentFixture<GroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
