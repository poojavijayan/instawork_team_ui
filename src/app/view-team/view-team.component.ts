import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHelperService } from "./../http-helper.service";
import { CommonHelperService } from "./../common-helper.service";
@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {

  constructor(private router:Router, private httpHelper: HttpHelperService, private common:CommonHelperService) { }
  public team:any[]=[];
  public teamNo:number = 0;
  ngOnInit(): void {
    this.getTeammates();
  }
  public editTeam(navigationPath:string, memberNo:number){
    this.common.teamMate = this.team[memberNo];
    this.router.navigate(['/', navigationPath]);
  }
  public addTeam(navigationPath:string){
    this.router.navigate(['/', navigationPath]);
  }

  getTeammates(){
    return this.httpHelper.fetchTeam().subscribe((data: any) => {
      this.team = data['team'];
      this.teamNo = this.team.length;
    })
  }

}
