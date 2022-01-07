import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("launches")
class Launches {
    @PrimaryColumn()
    id: string;

    @Column()
    provider: string;

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