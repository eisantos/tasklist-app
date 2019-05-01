import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListagemComponent } from './components/tasks/task-listagem/task-listagem.component';
import { TaskDetalhesComponent } from './components/tasks/task-detalhes/task-detalhes.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListagemComponent },
  { path: 'tasks/cadastro', component: TaskDetalhesComponent },
  { path: 'tasks/cadastro/:id', component: TaskDetalhesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
