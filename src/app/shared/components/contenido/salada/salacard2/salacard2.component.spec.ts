import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salacard2Component } from './salacard2.component';

describe('Salacard2Component', () => {
  let component: Salacard2Component;
  let fixture: ComponentFixture<Salacard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salacard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Salacard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
