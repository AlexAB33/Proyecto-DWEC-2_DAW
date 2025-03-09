import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags',
  standalone: false
})
export class TagsPipe implements PipeTransform {
  // Transformar las tags de las comidas
  transform(meal: any): any {
    meal.forEach((item: any) => {
      item.strTags = item.strTags.replaceAll(",", ", ")
    });
    return meal;
  }

  // Transformar las tags de una sola comida
  transformOne(meal: any): any {
    meal.strTags = meal.strTags.replaceAll(",", ", ")
    return meal;
  }
}
