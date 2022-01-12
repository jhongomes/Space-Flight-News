import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"
import { Articles } from "../../../../articles/infra/typeorm/entities/Articles";

@Entity("launches")
class Launches {
    @PrimaryColumn()
    id: string;

    @Column()
    provider: string;

    @OneToMany(() => Articles, articles => articles.launchesId)
    articlesID: Articles;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
export { Launches }