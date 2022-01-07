import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Events } from "../infra/typeorm/entities/Events";

export interface IEventsRepository extends IBaseRepository<Events> {
    All(): Promise<Events[]>;
    findById(id: string): Promise<Events>;
    findByProvider(provider: string): Promise<Events>;
}
