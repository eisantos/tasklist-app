import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetalhesComponent } from './task-detalhes.component';

describe('TaskDetalhesComponent', () => {
  let component: TaskDetalhesComponent;
  let fixture: ComponentFixture<TaskDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
