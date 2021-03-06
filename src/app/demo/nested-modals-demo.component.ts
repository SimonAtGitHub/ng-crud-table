import {Component, OnInit, ViewChild} from '@angular/core';
import {Column, CdtSettings, DataManager} from '../../ng-crud-table';
import {DemoService} from './demo.service';
import {getColumnsPlayers} from './columns';

@Component({
  selector: 'app-nested-modals-demo',
  template: `
    <app-modal #modal [modalTitle]="'Data-table'" [maximizable]="true" [width]="1100">
      <ng-container class="app-modal-body">
        <app-crud-table
          [dataManager]="dataManager"
          (select)="onSelect($event)">
        </app-crud-table>
      </ng-container>
    </app-modal>
    <button class="dt-button" (click)="openModal()">open modal</button>
  `
})

export class NestedModalsDemoComponent implements OnInit {

  columns: Column[];
  dataManager: DataManager;

  settings: CdtSettings = <CdtSettings>{
    crud: true,
    bodyHeight: 380,
    zIndexModal: 1110
  };

  @ViewChild('modal') modal: any;

  constructor(private service: DemoService) {
    this.columns = getColumnsPlayers();
    for (const column of this.columns) {
      column.editable = false;
    }
    this.dataManager = new DataManager(this.columns, this.settings, this.service);
  }
  ngOnInit() {
  }

  openModal() {
    this.modal.show();
  }

  onSelect(event) {
    console.log(event);
  }

}
