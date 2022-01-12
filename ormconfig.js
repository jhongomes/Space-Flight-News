module.exports = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    migrations: [
        "./src/shared/infra/database/migrations/*.ts"
    ],
    entities: [
        "./src/modules/**/entities/*.ts"
    ],
    cli: {
        "migrationsDir": "./src/shared/infra/database/migrations"
    }
}
