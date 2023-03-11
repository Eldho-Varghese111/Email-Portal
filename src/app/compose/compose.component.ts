import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  to: string | undefined;
  subject: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSend(): void {
    const sentMail = {
      to: this.to,
      subject: this.subject,
      message: this.message
    };
    let sentMails = JSON.parse(localStorage.getItem('sentMails') || '[]');
    sentMails.push(sentMail);
    localStorage.setItem('sentMails', JSON.stringify(sentMails));
    alert('Mail sent successfully');
  }

  onDraft(): void {
    const draftMail = {
      to: this.to,
      subject: this.subject,
      message: this.message
    };
    let draftMails = JSON.parse(localStorage.getItem('draftMails') || '[]');
    draftMails.push(draftMail);
    localStorage.setItem('draftMails', JSON.stringify(draftMails));
    alert('Mail saved as draft');
  }
}
