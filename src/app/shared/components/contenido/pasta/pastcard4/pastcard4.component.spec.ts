import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastcard4Component } from './pastcard4.component';

describe('Pastcard4Component', () => {
  let component: Pastcard4Component;
  let fixture: ComponentFixture<Pastcard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastcard4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pastcard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
