import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbergeneratorbackComponent } from './numbergeneratorback.component';

describe('NumbergeneratorbackComponent', () => {
  let component: NumbergeneratorbackComponent;
  let fixture: ComponentFixture<NumbergeneratorbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbergeneratorbackComponent]
    });
    fixture = TestBed.createComponent(NumbergeneratorbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
