import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastcard1Component } from './pastcard1.component';

describe('Pastcard1Component', () => {
  let component: Pastcard1Component;
  let fixture: ComponentFixture<Pastcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastcard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pastcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
