import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherLogementComponent } from './chercher-logement.component';

describe('ChercherLogementComponent', () => {
  let component: ChercherLogementComponent;
  let fixture: ComponentFixture<ChercherLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
