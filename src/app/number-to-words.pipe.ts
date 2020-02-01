import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(value: any): any 
  {
    if(value == null){
      return null;
    }
    else{
      return this.inWords(value)
    }
  }

  private inWords = (n) =>{
    let a = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Tweleve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];

    let b = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    let g = [
      '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrallion', 
    ];
    
    const arr = x => Array.from(x);
    const num = x => Number(x) || 0;
    const str = x => String(x);
  }

}
