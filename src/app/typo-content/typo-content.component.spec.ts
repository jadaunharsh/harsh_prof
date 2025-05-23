import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoContentComponent } from './typo-content.component';

describe('TypoContentComponent', () => {
  let component: TypoContentComponent;
  let fixture: ComponentFixture<TypoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypoContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
