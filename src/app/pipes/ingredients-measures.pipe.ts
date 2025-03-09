import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients-measures',
  standalone: false
})
export class IngredientsMeasuresPipe implements PipeTransform {

  transform(meal: any): any {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push(ingredient);
        measures.push(measure || '');
      } else {
        break;
      }
    }

    return {
      ...meal,
      strIngredients: ingredients,
      strMeasures: measures
    };
  }
}
