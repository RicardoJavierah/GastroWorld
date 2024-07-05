import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastcard3Component } from './pastcard3.component';

describe('Pastcard3Component', () => {
  let component: Pastcard3Component;
  let fixture: ComponentFixture<Pastcard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastcard3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pastcard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
