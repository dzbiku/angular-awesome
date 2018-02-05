import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
   name: 'convertToSpaces' ,
})

export class ConvertToSpacesPipe implements PipeTransform{ //uzycie interfejsu, a raczej jego implementajca
    transform(value: string, character: string):string 
    {
        return value.replace(character,' ');
    }
}