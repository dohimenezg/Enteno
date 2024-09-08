import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionTestComponent } from './recomendacion-test.component';

describe('RecomendacionTestComponent', () => {
  let component: RecomendacionTestComponent;
  let fixture: ComponentFixture<RecomendacionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendacionTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
