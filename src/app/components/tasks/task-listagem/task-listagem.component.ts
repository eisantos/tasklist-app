import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { MatSnackBar } from '@angular/material';
import { Task } from '../../../models/task';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';
import { ErrorHandlerComponent } from '../../error-handler/error-handler.component';

@Component({
  selector: 'app-task-listagem',
  templateUrl: './task-listagem.component.html',
  styleUrls: ['./task-listagem.component.css']
})
export class TaskListagemComponent implements OnInit {

  tasks: Array<Task>;
  /** Colunas para apresentar em tela*/
  displayedColumns: string[] = ['id_task','titulo', 'data_criacao', 'data_situacao', 'status', 'editar'];
  task_status: Status[];

  constructor(
    private taskService: TaskService,
    private statusService: StatusService,
    private errorHandler: ErrorHandlerComponent,
    private snackBar: MatSnackBar) { }

  /** Carrega as Tasks e cria a lista de situações disponíveis */
  ngOnInit() {
    this.list();
    this.statusService.list().subscribe(dados => {this.task_status = dados},
      (err) => {
        this.errorHandler.trataErro(err, 'Houve um erro ao carregar os Status. Entre em contato com o Suporte técnico.');
      });
  }

  /** Carrega as Tasks */
  list(){
    this.taskService.list().subscribe(dados => {this.tasks = dados},
      (err) => {
        this.errorHandler.trataErro(err, 'Houve um erro ao abrir a lista de Tasks. Entre em contato com o Suporte técnico.');
      })
  }

  /** Deleta uma Task */
  delete(id_task: number){
    this.taskService.delete(id_task).subscribe(dados => {
      this.openSnackBar('Task removida com sucesso!');
      this.list()
    },
    (err) => {
      this.errorHandler.trataErro(err, '');
    })
  }
  
  /** Salva a Task sempre que seu Status é alterado */
  statusClick(dado: any) {
    var dadoStatus = this.task_status.find(x => x.sgl_status == dado.task_status.sgl_status);
    dado.task_status= dadoStatus;
    this.taskService.save(dado.id_task, dado).subscribe(dados => {
      dado = dados;
      this.openSnackBar("Salvo com sucesso!");
    },
    (err) => {
      this.errorHandler.trataErro(err, '');
    });
  }

  /**
   * TODO
   *  Criar componente de mensagem */
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

}
