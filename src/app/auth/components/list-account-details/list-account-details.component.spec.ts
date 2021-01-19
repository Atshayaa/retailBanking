import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountDetailsComponent } from './list-account-details.component';

describe('ListAccountDetailsComponent', () => {
  let component: ListAccountDetailsComponent;
  let fixture: ComponentFixture<ListAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
