import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistRightcontentComponent } from './bloglist-rightcontent.component';

describe('BloglistRightcontentComponent', () => {
  let component: BloglistRightcontentComponent;
  let fixture: ComponentFixture<BloglistRightcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloglistRightcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloglistRightcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
