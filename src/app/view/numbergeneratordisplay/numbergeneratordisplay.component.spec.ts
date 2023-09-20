import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbergeneratordisplayComponent } from './numbergeneratordisplay.component';

describe('NumbergeneratordisplayComponent', () => {
  let component: NumbergeneratordisplayComponent;
  let fixture: ComponentFixture<NumbergeneratordisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbergeneratordisplayComponent]
    });
    fixture = TestBed.createComponent(NumbergeneratordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
