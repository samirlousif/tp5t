import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppemployesComponent } from './suppemployes.component';

describe('SuppemployesComponent', () => {
  let component: SuppemployesComponent;
  let fixture: ComponentFixture<SuppemployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppemployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppemployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
