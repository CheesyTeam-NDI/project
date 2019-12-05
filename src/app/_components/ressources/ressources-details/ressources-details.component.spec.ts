import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesDetailsComponent } from './ressources-details.component';

describe('RessourcesDetailsComponent', () => {
  let component: RessourcesDetailsComponent;
  let fixture: ComponentFixture<RessourcesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourcesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
