import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEntrenoComponent } from './perfil-entreno.component';

describe('PerfilEntrenoComponent', () => {
  let component: PerfilEntrenoComponent;
  let fixture: ComponentFixture<PerfilEntrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilEntrenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEntrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
