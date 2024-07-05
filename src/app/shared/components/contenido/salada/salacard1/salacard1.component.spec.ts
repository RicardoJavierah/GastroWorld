import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salacard1Component } from './salacard1.component';

describe('Salacard1Component', () => {
  let component: Salacard1Component;
  let fixture: ComponentFixture<Salacard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salacard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Salacard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
