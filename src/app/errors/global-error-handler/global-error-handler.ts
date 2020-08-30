import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/services/user/user.service';
import { ServerLogService } from '../server-log.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const router = this.injector.get(Router);
    const serverLogService = this.injector.get(ServerLogService);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    throw StackTrace.fromError(error).then((stackFrames) => {
      const message = error.message ? error.message : error.toString();
      if (environment.production) {
        router.navigate(['/error']);
      }
      const stackAsString = stackFrames
        .map((stackFrame) => stackFrame.toString())
        .join('\n');

      const log = {
        message,
        user: userService.getUserName(),
        stacktrace: stackAsString,
        url,
      };

      console.log(log);
      serverLogService.log(log).subscribe(
        () => {
          console.log('error logged on server');
        },
        (err) => {
          console.log(err);
          console.log('fail to send error log to server');
        }
      );
    });
  }
}
