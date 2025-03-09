import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags',
  standalone: false
})
export class TagsPipe implements PipeTransform {

  transform(meal: any): any {
    if (Array.isArray(meal)) {
      meal.forEach(item => {
        this.transformTags(item);
      });
    } else if (meal.strTags) {
      this.transformTags(meal);
    }
    return meal;
  }

  transformTags(meal: any): any {
    if (meal.strTags) {
      meal.strTags = meal.strTags.replaceAll(",", ", ");
    } else {
      meal.strTags = "No tags";
    }

    return meal;
  }
}
