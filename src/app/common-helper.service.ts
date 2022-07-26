import { Injectable } from '@angular/core';
import { TeamMembers } from "./team-members";
@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {

  teamMate:TeamMembers = new TeamMembers();
  constructor() { }
}
