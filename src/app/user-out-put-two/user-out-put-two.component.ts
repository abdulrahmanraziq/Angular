import { Component, EventEmitter,Input, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-user-out-put-two',
  templateUrl: './user-out-put-two.component.html',
  styleUrls: ['./user-out-put-two.component.css'],
  template: `<input type='number' [(ngModel)]='updatedstockvalue'/> <button class='btn btn-primary'
     [style.background]='color'
     (click)="stockValueChanged()">Change Stock Value</button> `
})
export class UserOutPutTwoComponent implements OnChanges  {
  @Input() stock: number;
    @Input() productId: number;
    @Output() stockValueChange = new EventEmitter();
    color = '';
    updatedstockvalue: number;
    stockValueChanged() {
        this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
        this.updatedstockvalue = null;
    }
    ngOnChanges() {
        if (this.stock > 10) {
            this.color = 'green';
        } else {
            this.color = 'red';
        }
    }
  constructor() { }

  ngOnInit() {
  }

  
}
