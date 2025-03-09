export interface IMeal {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string[];
  strYoutube: string;
  strIngredient: string; // Para buscar por ingrediente
  strIngredients: string[];
  strMeasures: string[];
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}
