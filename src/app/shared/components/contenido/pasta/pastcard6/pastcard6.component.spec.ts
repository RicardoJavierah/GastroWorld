import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastcard6Component } from './pastcard6.component';

describe('Pastcard6Component', () => {
  let component: Pastcard6Component;
  let fixture: ComponentFixture<Pastcard6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastcard6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pastcard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
