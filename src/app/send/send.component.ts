import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  sentMails: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.sentMails = JSON.parse(localStorage.getItem('sentMails') || '[]');
  }
}
