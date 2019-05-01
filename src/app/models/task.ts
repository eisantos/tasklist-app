import { Status } from './status';

export class Task {
	
	id_task:number;
	titulo:String;
	task_status:Status;
	descricao:String;
	data_criacao:Date;
    data_situacao:Date;
}