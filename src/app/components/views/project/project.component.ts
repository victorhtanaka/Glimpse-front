import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  getProjects(userId: number): void {
    this.userService.getById(userId).subscribe(res => {
      return res.projects;
    })
  }
}
