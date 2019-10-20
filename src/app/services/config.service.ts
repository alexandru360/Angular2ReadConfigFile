import {Injectable} from '@angular/core';
import {Configuration} from '../../config';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private config: Configuration;

  constructor(private http: HttpClient) {
  }

  load(url: string) {
    // this.http.get(url).map((res: Response) => this.config = res.json()).subscribe(res => this.config = res);
    return new Promise((resolve) => {
      this.http.get<Configuration>(url).pipe(map(res => res))
        .subscribe(config => {
          console.log('Json returned: ', config);
          this.config = config;
          resolve();
        });
    });
  }

  getConfiguration(): Configuration {
    return this.config;
  }
}
