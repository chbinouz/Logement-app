import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogementComponent } from './list-logement.component';

describe('ListLogementComponent', () => {
  let component: ListLogementComponent;
  let fixture: ComponentFixture<ListLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
