import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];

  constructor(
    private _projectService: ProjectService
  ) { 
    
  }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(){
  	this._projectService.getProjects().subscribe(
  		response => {
        
  			if(response.projects){
  				this.projects = response.projects;
  			}
       console.log(response)
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}
