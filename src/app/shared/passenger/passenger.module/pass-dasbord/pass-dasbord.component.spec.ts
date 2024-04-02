import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDasbordComponent } from './pass-dasbord.component';

describe('PassDasbordComponent', () => {
  let component: PassDasbordComponent;
  let fixture: ComponentFixture<PassDasbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDasbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDasbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
