import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients-measures',
  standalone: false
})
export class IngredientsMeasuresPipe implements PipeTransform {
  // Transformar los ingredientes y medidas de una comida
  transform(meal: any): any {
    // Inicializar los arrays de ingredientes y medidas
    const ingredients: string[] = [];
    const measures: string[] = [];

    // Recorrer los ingredientes y medidas de la comida
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      // Si el ingrediente existe, agregar el ingrediente y la medida al array
      if (ingredient) {
        ingredients.push(ingredient);
        measures.push(measure || '');
      } else {
        // Si el ingrediente no existe, romper el bucle
        break;
      }
    }

    // Devolver la comida con los ingredientes y medidas transformados
    return {
      ...meal,
      strIngredients: ingredients,
      strMeasures: measures
    };
  }
}
