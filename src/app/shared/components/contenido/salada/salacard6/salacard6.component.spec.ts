import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salacard6Component } from './salacard6.component';

describe('Salacard6Component', () => {
  let component: Salacard6Component;
  let fixture: ComponentFixture<Salacard6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salacard6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Salacard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
