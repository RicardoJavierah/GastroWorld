import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salacard4Component } from './salacard4.component';

describe('Salacard4Component', () => {
  let component: Salacard4Component;
  let fixture: ComponentFixture<Salacard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salacard4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Salacard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
