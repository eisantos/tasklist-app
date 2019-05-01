import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Status } from '../../../models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-task-detalhes',
  templateUrl: './task-detalhes.component.html',
  styleUrls: ['./task-detalhes.component.css']
})
export class TaskDetalhesComponent implements OnInit {

  task = new Task;
  selectedId: number;
  selectedStatus: Status;
  form: FormGroup;

  task_status: Status[];

  constructor(
    private taskService: TaskService,
    private statusService: StatusService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        task_status: ['', Validators.required],
        id_task: [''],
        titulo: ['', [Validators.required]],
        descricao: ['', [Validators.required]]
    });
    
    this.selectedId = +this.route.snapshot.paramMap.get("id");
    if (this.selectedId > 0){
      this.edit(this.selectedId);
    } else {
      this.task = new Task;
    }

    this.statusService.list().subscribe(dados => {
      this.task_status = dados;
    });

    this.task_status

  }

  /*TODO
    Criar componente de mensagem
  */
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  //Carrega Task para edição
  edit(selectedId: number){
    this.taskService.edit(selectedId).subscribe(dados => {
      this.task = dados;
      this.form.controls['id_task'].setValue(this.task.id_task)
      this.form.controls['titulo'].setValue(this.task.titulo)
      this.form.controls['descricao'].setValue(this.task.descricao)
      this.form.controls['task_status'].setValue(this.task.task_status.sgl_status)
    })
  }

  /*
  Metodo para retornar à listagem quando salvar ou clicar em voltar
  TODO
    Estilizar a lista para apresentar última Task editada
  */
  gotoTaskList(id_task: Number) {
    let taskId = id_task ? id_task : null;
    this.router.navigate(['/tasks', { id: taskId }]);
  }

  /**Salva uma Task */
  save(event: any, form: { value: any; }) {
    
    /** Valida formulário de acordo com diretrizes do formBuilder */
    if (this.form.invalid) {
      return;
    }

    /**Busca o status que foi selecionado e adiciona no objeto da Task */
    var arrayStatus = this.task_status.find(x => x.sgl_status == form.value['task_status']);
      form.value['task_status'] = arrayStatus;
      this.taskService.save(this.selectedId, form.value).subscribe(dados => {
        this.task = dados;
        this.openSnackBar("Salvo com sucesso!");
        this.gotoTaskList(this.selectedId)
      })

  }
}
