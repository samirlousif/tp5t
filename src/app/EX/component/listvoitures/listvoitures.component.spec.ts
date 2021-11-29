import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvoituresComponent } from './listvoitures.component';

describe('ListvoituresComponent', () => {
  let component: ListvoituresComponent;
  let fixture: ComponentFixture<ListvoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvoituresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
