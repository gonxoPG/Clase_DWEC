import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes',
  standalone: false
})
export class ImagenesPipe implements PipeTransform {

  transform(value: string[] | undefined, ...args: number[]): string { // el valor de entrada es un array-string porque es el listado de tags, el segundo valor son argumentos si hubiese, el tercer valor es un string porque es el enlace

    if (value?.includes('french')) {

      return 'https://media.istockphoto.com/id/1054778956/vector/french.jpg?s=612x612&w=0&k=20&c=9a1NhaM32UxzNEeskX7gzOWDxccSWJFbJSQmUcV52gs=';
    } else if (value?.includes('fiction')) {
      
      return 'https://prod-website-cdn.studysmarter.de/sites/2/uk/Literary-Fiction-Books-dark-min.png';
    } else if (value?.includes('history')) {
      
      return 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg';
    } else if (value?.includes('english')) {
     
      return 'https://media.istockphoto.com/id/1047570732/es/vector/ingl%C3%A9s.jpg?s=170667a&w=is&k=20&c=EUf63jOoahOmvYXjHbSUS8Mw764RKszkbFqPCTXg__E=';
    }
    return 'https://images.squarespace-cdn.com/content/v1/57263bf8f8baf385ff61bb09/1535668320137-NZQPOXCGLFT34I9E4Z1E/Screen+Shot+2018-08-30+at+6.17.10+PM.png';
  }

}
