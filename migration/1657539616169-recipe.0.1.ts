import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class recipe.0.11657539616169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "recipe",
            columns: [
                {
                    name: "id",
                    type: "string"
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "string"
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("recipe");
    }

}
