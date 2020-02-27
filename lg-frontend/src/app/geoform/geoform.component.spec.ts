import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoformComponent } from './geoform.component';

describe('GeoformComponent', () => {
  let component: GeoformComponent;
  let fixture: ComponentFixture<GeoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
