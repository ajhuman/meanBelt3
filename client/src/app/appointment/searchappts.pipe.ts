
  import { Pipe, PipeTransform } from '@angular/core';

  import { Appointment } from './appointment'

@Pipe({
  name: 'searchappts'
})
export class SearchapptsPipe implements PipeTransform {


  transform(value: Appointment[], filter_name: string): any {
    if(!filter_name){ return value }

    function contains_string(appointment: Appointment, str: string) : boolean {
        str = str.toLowerCase()

        for(var key in appointment){
            console.log(key, typeof key)
            if(appointment[key].toString().toLowerCase().indexOf(str) > -1){
                console.log(key, appointment[key].toString())
                return true
            }
        }

        return false
    }

    return value.filter(appointment => contains_string(appointment, filter_name))

    }
}
