import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastcard2Component } from './pastcard2.component';

describe('Pastcard2Component', () => {
  let component: Pastcard2Component;
  let fixture: ComponentFixture<Pastcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastcard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pastcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
