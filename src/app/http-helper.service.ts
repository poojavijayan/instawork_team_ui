import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamMembers } from "./team-members";

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }

  fetchTeam(): Observable<TeamMembers> {
    return this.http
      .get<TeamMembers>('http://127.0.0.1:8000'+ '/getTeammates/', this.httpOptions)
      .pipe(retry(1));
  }

  InsertTeamMemeber(teamMate:TeamMembers): Observable<TeamMembers> {
    return this.http
    .post<TeamMembers>('http://127.0.0.1:8000'+'/getTeammates/', teamMate, this.httpOptions)
    .pipe(retry(1));
  }

  EditTeamMemeber(teamMate:TeamMembers): Observable<TeamMembers> {
    return this.http
    .put<TeamMembers>('http://127.0.0.1:8000'+'/editTeam/'+teamMate.id, teamMate, this.httpOptions)
    .pipe(retry(1));
  }

  DeleteTeamMemeber(teamMate:TeamMembers): Observable<TeamMembers> {
    return this.http
    .delete<TeamMembers>('http://127.0.0.1:8000'+'/editTeam/'+teamMate.id, this.httpOptions)
    .pipe(retry(1));
  }
}
