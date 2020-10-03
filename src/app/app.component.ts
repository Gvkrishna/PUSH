import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';
import {BackendDerviceService } from './backend-dervice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-notification';
  message;
  name = null;
  constructor(private messagingService: MessagingService, private backendService: BackendDerviceService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
   }
   // tslint:disable-next-line: typedef
   sendNotification() {
     console.log(this.name);
     this.backendService.saveToken(this.messagingService.token, this.name).subscribe((res) => {
      console.log(res);
    });
   }
}
