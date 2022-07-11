import { Recipe } from '../entities/recipe';

export class RecipeService {
    getAll = async ():Promise<Recipe[]> => {
      return await Recipe.find();
    }
  
    getOne = async (id: string):Promise<Recipe|undefined> => {
      const recipe = await Recipe.findOne({ where: {id} });
  
      if (!recipe) {
        throw new Error(`The recipe with id: ${id} does not exist!`);
      }
      return recipe;
    }
  
    // create = async (createRecipeInput: CreateRecipeInput): Promise<Recipe> => {
    //   return await Recipe.create(createRecipeInput).save();
    // };
  }