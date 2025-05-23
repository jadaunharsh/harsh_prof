import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubProfileComponent } from './git-hub-profile.component';

describe('GitHubProfileComponent', () => {
  let component: GitHubProfileComponent;
  let fixture: ComponentFixture<GitHubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
