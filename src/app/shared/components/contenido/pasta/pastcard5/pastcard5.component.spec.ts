import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastcard5Component } from './pastcard5.component';

describe('Pastcard5Component', () => {
  let component: Pastcard5Component;
  let fixture: ComponentFixture<Pastcard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastcard5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pastcard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
