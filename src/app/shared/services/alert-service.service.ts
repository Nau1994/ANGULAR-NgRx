import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Injectable()
export class AlertServiceService {

  constructor(private modal:NgbModal) { }

  showErrorModal(message:String){
    const modalComponent=this.modal.open(ErrorModalComponent)
    modalComponent.componentInstance.message=message
  }
}
