import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHelperService } from '../http-helper.service';
import { TeamMembers } from '../team-members';
import { CommonHelperService } from "./../common-helper.service";

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  constructor(private router:Router, private common:CommonHelperService, private httpHelper: HttpHelperService) { }
  teamMate:TeamMembers = new TeamMembers();
  public isEditable:boolean = false;
  public adminMsg:string = 'Admin members cannot be deleted';
  ngOnInit(): void {
    this.teamMate = this.common.teamMate;
    if(this.teamMate.role=='admin'){
      this.isEditable=true;
    }else{
      this.isEditable=false;
    }
  }
  public deleteMember(navigationPath:string){
    return this.httpHelper.DeleteTeamMemeber(this.teamMate).subscribe((data: any) => {
      this.router.navigate(['/', navigationPath]);
    })
  }

  editMember(navigationPath:string) {
    return this.httpHelper.EditTeamMemeber(this.teamMate).subscribe((data: any) => {
      if(data.hasOwnProperty('firstName')){
        this.router.navigate(['/', navigationPath]);
      }
    })
  }
}
