import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
//impottar el modelo
import { Project } from 'src/app/models/project';
//importar el servicio
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;

  constructor(
    private projectService: ProjectService
  ) {
    this.title = 'crear projecto';
    this.project = new Project('','','','',2022,'','');
  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(this.project);


  }

}
