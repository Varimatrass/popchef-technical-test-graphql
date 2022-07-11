import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Recipe } from "../../entities/recipe";
import { CreateRecipeInput } from "../../inputs/CreateRecipeInput";
import { QueryResolvers } from '../generated/graphql';

// Resolvers define the technique for fetching the types in the schema.
export const RecipeResolver: {
  Query: Pick<QueryResolvers, 'recipe' | 'recipes'>;
} = {
  Query: {
    recipe: (_, args, ctx) => {
      return ctx.dataSources.recipes.getRecipe(args)
    },
    recipes: (_, __, ctx) => {
      return ctx.dataSources.recipes.getRecipes()
    },
  },
  Mutation: {
    createRecipe: (_, args, ctx) => {
      return ctx.dataSources.recipes.createRecipes(args)
    }
  },
};


// @Resolver()
// export class RecipeResolver {
//   @Query(() => [Recipe])
//   recipes() {
//     return Recipe.find();
//   }
//   @Query(() => Recipe)
//   recipe(@Arg("id") id: string) {
//     return Recipe.findOne({ where: {id}})
//   }
  
//   @Mutation(() => Recipe)
//   async createRecipe(@Arg("data") data: CreateRecipeInput) {
//     const recipe = Recipe.create(data);
//     await recipe.save();
//     return recipe;
//   }
// }