import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirm-dialog',
  styleUrl: './confirm-dialog.css',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialog {
  message = input<string>();
  confirmed = output<void>();
  cancelled = output<void>();

  handleConfirm() {
    console.log('Confirm button clicked');
    this.confirmed.emit();
  }

  handleCancel() {
    console.log('Cancel button clicked');
    this.cancelled.emit();
  }
}
