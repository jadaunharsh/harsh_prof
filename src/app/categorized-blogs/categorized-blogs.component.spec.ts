import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedBlogsComponent } from './categorized-blogs.component';

describe('CategorizedBlogsComponent', () => {
  let component: CategorizedBlogsComponent;
  let fixture: ComponentFixture<CategorizedBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizedBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
