import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    appReady: boolean = false;
    loaderDelay: number = 5;

    ngOnInit() {
        timer(this.loaderDelay * 1000).subscribe(x =>{
            this.appReady = true;
        });
    }

}
