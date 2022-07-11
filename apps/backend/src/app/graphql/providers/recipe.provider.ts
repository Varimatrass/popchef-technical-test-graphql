import { DataSource } from 'apollo-datasource';
import { Recipe } from '../../entities/recipe';
import { CreateQueryRecipeArgs, QueryRecipeArgs } from '../generated/graphql';
/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */

export class RecipesProvider extends DataSource {
  public async getRecipe({ id }: QueryRecipeArgs) {
    const recipe = await  Recipe.findOne({ where: {id}})
    
    return recipe;
  }

  public async getRecipes() {
    const recipes = await Recipe.find();
    
    return recipes;
  }

  async createRecipe(data: CreateQueryRecipeArgs) {
    const recipe = Recipe.create(data);
    await recipe.save();
    return recipe;
  }
}
