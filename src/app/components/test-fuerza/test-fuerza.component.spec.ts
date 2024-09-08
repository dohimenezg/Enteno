import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFuerzaComponent } from './test-fuerza.component';

describe('TestFuerzaComponent', () => {
  let component: TestFuerzaComponent;
  let fixture: ComponentFixture<TestFuerzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFuerzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFuerzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
