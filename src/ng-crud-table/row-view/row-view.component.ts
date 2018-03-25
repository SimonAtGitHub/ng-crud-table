import {Component, OnInit, Input} from '@angular/core';
import {DataManager} from '../base/data-manager';

@Component({
  selector: 'app-row-view',
  templateUrl: './row-view.component.html'
})
export class RowViewComponent implements OnInit {

  @Input() public dataManager: DataManager;

  order: string;
  reverse: boolean = true;
  transposedData: any[];

  constructor() {
  }

  ngOnInit() {
    this.transposedData = [];
    for (const column of this.dataManager.columns) {
      this.transposedData.push({key: column.title, value: column.getValueView(this.dataManager.item)});
    }
  }

  setOrder(name: string) {
    if (this.order === name) {
      this.reverse = !this.reverse;
    }
    this.order = name;
  }

  isOrder(name: string) {
    return this.order === name && this.reverse;
  }

  isOrderReverse(name: string) {
    return this.order === name && !this.reverse;
  }

}
