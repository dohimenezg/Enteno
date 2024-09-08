import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFuerzaTablaComponent } from './test-fuerza-tabla.component';

describe('TestFuerzaTablaComponent', () => {
  let component: TestFuerzaTablaComponent;
  let fixture: ComponentFixture<TestFuerzaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFuerzaTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFuerzaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
