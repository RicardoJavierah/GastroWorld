import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladcardComponent } from './saladcard.component';

describe('SaladcardComponent', () => {
  let component: SaladcardComponent;
  let fixture: ComponentFixture<SaladcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaladcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaladcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
