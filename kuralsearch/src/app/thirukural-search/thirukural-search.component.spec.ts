import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirukuralSearchComponent } from './thirukural-search.component';

describe('ThirukuralSearchComponent', () => {
  let component: ThirukuralSearchComponent;
  let fixture: ComponentFixture<ThirukuralSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirukuralSearchComponent]
    });
    fixture = TestBed.createComponent(ThirukuralSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
