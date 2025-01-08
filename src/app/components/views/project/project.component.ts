import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  getProjects(id: number): void {
    this.userService.getById(id).subscribe(res => {
      return res.projects;
    })
  }
}
