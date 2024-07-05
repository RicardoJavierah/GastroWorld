import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastacardComponent } from './pastacard.component';

describe('PastacardComponent', () => {
  let component: PastacardComponent;
  let fixture: ComponentFixture<PastacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastacardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
