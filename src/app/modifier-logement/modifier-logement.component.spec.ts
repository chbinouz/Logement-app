import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLogementComponent } from './modifier-logement.component';

describe('ModifierLogementComponent', () => {
  let component: ModifierLogementComponent;
  let fixture: ComponentFixture<ModifierLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
