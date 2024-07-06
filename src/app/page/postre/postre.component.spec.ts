import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreComponent } from './postre.component';

describe('PostreComponent', () => {
  let component: PostreComponent;
  let fixture: ComponentFixture<PostreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
