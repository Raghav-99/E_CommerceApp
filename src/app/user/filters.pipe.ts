import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value : any[], filterString: string, propName:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || propName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
