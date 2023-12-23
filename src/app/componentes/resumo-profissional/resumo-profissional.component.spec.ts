import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoProfissionalComponent } from './resumo-profissional.component';

describe('ResumoProfissionalComponent', () => {
  let component: ResumoProfissionalComponent;
  let fixture: ComponentFixture<ResumoProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumoProfissionalComponent]
    });
    fixture = TestBed.createComponent(ResumoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
