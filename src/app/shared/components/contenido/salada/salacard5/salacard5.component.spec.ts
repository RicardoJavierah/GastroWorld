import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salacard5Component } from './salacard5.component';

describe('Salacard5Component', () => {
  let component: Salacard5Component;
  let fixture: ComponentFixture<Salacard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salacard5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Salacard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
