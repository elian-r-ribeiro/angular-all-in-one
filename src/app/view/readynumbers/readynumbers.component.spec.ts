import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadynumbersComponent } from './readynumbers.component';

describe('ReadynumbersComponent', () => {
  let component: ReadynumbersComponent;
  let fixture: ComponentFixture<ReadynumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadynumbersComponent]
    });
    fixture = TestBed.createComponent(ReadynumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
