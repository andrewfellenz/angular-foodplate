import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyDetailComponent } from './dairy-detail.component';

describe('DairyDetailComponent', () => {
  let component: DairyDetailComponent;
  let fixture: ComponentFixture<DairyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
