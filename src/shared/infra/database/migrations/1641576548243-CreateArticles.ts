import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArticles1641576548243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "articles",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "featured",
                        type: "boolean",
                    },
                    {
                        name: "url",
                        type: "varchar",
                    },
                    {
                        name: "imageUrl",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "newsSite",
                        type: "varchar",
                    },
                    {
                        name: "summary",
                        type: "varchar",
                    },
                    {
                        name: "publishedAt",
                        type: "varchar"
                    },
                    {
                        name: "launches_id",
                        type: "uuid"
                    },
                    {
                        name: "events_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKLaunches",
                        referencedTableName: "launches",
                        referencedColumnNames: ["id"],
                        columnNames: ["launches_id"],
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL"
                    },
                    {
                        name: "FKEvents",
                        referencedTableName: "events",
                        referencedColumnNames: ["id"],
                        columnNames: ["events_id"],
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("articles")
    }

}
