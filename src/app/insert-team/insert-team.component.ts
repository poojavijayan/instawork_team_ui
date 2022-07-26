import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TeamMembers } from "./../team-members";
import { HttpHelperService } from "./../http-helper.service";
@Component({
  selector: 'app-insert-team',
  templateUrl: './insert-team.component.html',
  styleUrls: ['./insert-team.component.css']
})
export class InsertTeamComponent implements OnInit {

  constructor(private router:Router, private httpHelper: HttpHelperService) { }
  public teamMate:TeamMembers = new TeamMembers();
  
  ngOnInit(): void {
    this.teamMate.role='regular';
  }

  public viewTeam(navigationPath:string){
    return this.httpHelper.InsertTeamMemeber(this.teamMate).subscribe((data: any) => {
      if(data.hasOwnProperty('firstName')){
        this.router.navigate(['/', navigationPath]);
      }
    })
  }
}
