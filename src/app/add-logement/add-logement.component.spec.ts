import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogementComponent } from './add-logement.component';

describe('AddLogementComponent', () => {
  let component: AddLogementComponent;
  let fixture: ComponentFixture<AddLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
