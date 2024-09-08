import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVelocidadTablaComponent } from './test-velocidad-tabla.component';

describe('TestVelocidadTablaComponent', () => {
  let component: TestVelocidadTablaComponent;
  let fixture: ComponentFixture<TestVelocidadTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestVelocidadTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestVelocidadTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
