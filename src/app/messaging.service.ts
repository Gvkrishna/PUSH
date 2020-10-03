import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/messaging';
import {BackendDerviceService } from './backend-dervice.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  token;
  currentMessage = new BehaviorSubject(null);
  constructor(private http: HttpClient, private angularFireMessaging: AngularFireMessaging, private backendService: BackendDerviceService) {
    // this.angularFireMessaging.messages.subscribe(
    // (messaging) => {
    // (messaging as any).onMessage = (messaging as any).onMessage.bind(messaging);
    // (messaging as any).onTokenRefresh = (messaging as any).onTokenRefresh.bind(messaging);
    // }
    // );
    }

    // tslint:disable-next-line: typedef
    requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
    (token) => {
    console.log(token);
    this.token = token;
    // this.backendService.saveToken(token).subscribe((res)=> {
    //   console.log(res);
    // });
    },
    (err) => {
    console.error('Unable to get permission to notify.', err);
    }
    );
    }

    // tslint:disable-next-line: typedef
    receiveMessage() {
      this.angularFireMessaging.messages.subscribe(
        (payload) => {
            console.log('new message received. ', payload);
            const NotificationOptions = {
                    body: (payload as any).notification.body,
                  };
            navigator.serviceWorker.register('./firebase-messaging-sw.js').then(registration => {
                    registration.showNotification((payload as any).notification.title, NotificationOptions);
                  });
            this.currentMessage.next(payload);
           });
}
}
