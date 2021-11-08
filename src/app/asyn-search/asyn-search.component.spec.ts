import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynSearchComponent } from './asyn-search.component';

describe('AsynSearchComponent', () => {
  let component: AsynSearchComponent;
  let fixture: ComponentFixture<AsynSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
