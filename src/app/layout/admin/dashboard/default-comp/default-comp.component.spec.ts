import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCompComponent } from './default-comp.component';

describe('DefaultCompComponent', () => {
  let component: DefaultCompComponent;
  let fixture: ComponentFixture<DefaultCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
