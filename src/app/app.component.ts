import {Component, OnInit} from '@angular/core';
import {ConfigService} from './services/config.service';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  webApiUrl: string;
  configLoaded: boolean;
  configContent: Configuration;

  facts: any[];

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.configContent = this.configService.getConfiguration();
    this.webApiUrl = this.configService.getConfiguration().catFactsApi;
    this.configLoaded = this.webApiUrl.length > 0;
  }

  ngOnInit() {
    if (this.webApiUrl) {
      this.http.get<any>(this.webApiUrl).subscribe(data => {
        console.log('Cat facts: ', data);
        this.facts = data;
      });
    }
  }
}
