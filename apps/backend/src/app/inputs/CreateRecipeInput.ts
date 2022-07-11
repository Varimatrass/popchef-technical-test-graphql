import { Field, InputType } from "type-graphql";

@InputType()
export class CreateRecipeInput {
    @Field()
    title: string;
}