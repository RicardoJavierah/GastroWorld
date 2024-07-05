import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salacard3Component } from './salacard3.component';

describe('Salacard3Component', () => {
  let component: Salacard3Component;
  let fixture: ComponentFixture<Salacard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salacard3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Salacard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
