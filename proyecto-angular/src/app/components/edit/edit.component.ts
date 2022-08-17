import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
//impottar el modelo
import { Project } from 'src/app/models/project';
//importar el servicio
import { ProjectService } from '../../services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string = '';
  public save_project: any;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.title = ' projecto';
    this.project = new Project('','','','',2022,'','');
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
  		let id = params['id']

  		this.getProject(id);
  	});
  }

  getProject(id: number){
  	this._projectService.getProject(id).subscribe(
  		response => {
  			this.project = response.project;
        
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }
  onSubmit(form:any){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response)
        if(response.project){
          this.save_project = response.project
          this.status= "success";
          form.reset()
        }else{
          this.status= "failed";
        }
      
      },
      error => console.log(error)
    );


  }

}
