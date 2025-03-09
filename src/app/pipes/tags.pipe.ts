import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags',
  standalone: false
})
export class TagsPipe implements PipeTransform {

  transform(meal: any): any {
    meal.forEach((item: any) => {
      item.strTags = item.strTags.replaceAll(",", ", ")
    });
    return meal;
  }

  transformOne(meal: any): any {
    meal.strTags = meal.strTags.replaceAll(",", ", ")
    return meal;
  }
}
