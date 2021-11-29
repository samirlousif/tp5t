import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosvoituresComponent } from './infosvoitures.component';

describe('InfosvoituresComponent', () => {
  let component: InfosvoituresComponent;
  let fixture: ComponentFixture<InfosvoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosvoituresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosvoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
