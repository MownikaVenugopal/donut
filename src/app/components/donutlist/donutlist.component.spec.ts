import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutlistComponent } from './donutlist.component';

describe('DonutlistComponent', () => {
  let component: DonutlistComponent;
  let fixture: ComponentFixture<DonutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
