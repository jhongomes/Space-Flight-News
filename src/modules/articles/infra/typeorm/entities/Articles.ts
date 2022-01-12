import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Events } from "../../../../events/infra/typeorm/entities/Events";
import { Launches } from "../../../../launches/infra/typeorm/entities/Launches";

@Entity("articles")
class Articles {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;


    @Column()
    featured: boolean;

    @Column()
    url: string;

    @Column()
    imageUrl: string;

    @Column()
    newsSite: string;

    @Column()
    summary: string;

    @Column()
    publishedAt: string;

    @ManyToOne(() => Launches)
    @JoinColumn({ name: "launches_id", })
    launchesId: Launches;

    @Column()
    launches_id: string;

    @JoinColumn({ name: "events_id" })
    @ManyToOne(() => Events)
    eventsId: Events;

    @Column()
    events_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
export { Articles }