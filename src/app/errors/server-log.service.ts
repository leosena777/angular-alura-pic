import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.serverLog;

export interface IServerLog {
  message: string;
  url: string;
  stacktrace: string;
  user: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerLogService {
  constructor(private http: HttpClient) {}

  log(serverLog: IServerLog) {
    return this.http.post(API + 'infra/log', serverLog);
  }
}
