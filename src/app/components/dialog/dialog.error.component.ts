import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export type DialogData = {
  title: string;
  description: string
}

@Component({
  selector: 'dialog-limit-post',
  templateUrl: 'dialog.error.component.html',
  styleUrls: ['./dialog.error.component.sass']
})
export class DialogErrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}
