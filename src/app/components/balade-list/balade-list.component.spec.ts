import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladeListComponent } from './balade-list.component';

describe('BaladeListComponent', () => {
  let component: BaladeListComponent;
  let fixture: ComponentFixture<BaladeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaladeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaladeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
