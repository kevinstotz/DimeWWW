import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-newsletter-response-dialog',
  templateUrl: './newsletter-response-dialog.component.html',
  styleUrls: ['./newsletter-response-dialog.component.scss']
})
export class NewsletterResponseDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewsletterResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
