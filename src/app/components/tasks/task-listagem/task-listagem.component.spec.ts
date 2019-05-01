import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListagemComponent } from './task-listagem.component';

describe('TaskListagemComponent', () => {
  let component: TaskListagemComponent;
  let fixture: ComponentFixture<TaskListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
