import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  drafts: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.drafts = JSON.parse(localStorage.getItem('draftMails') || '[]');
  }
}
