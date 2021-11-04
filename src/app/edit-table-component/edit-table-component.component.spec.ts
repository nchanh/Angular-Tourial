import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableComponentComponent } from './edit-table-component.component';

describe('EditTableComponentComponent', () => {
  let component: EditTableComponentComponent;
  let fixture: ComponentFixture<EditTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
