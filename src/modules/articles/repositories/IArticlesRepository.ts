import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Articles } from "../infra/typeorm/entities/Articles";

export interface IArticlesRepository extends IBaseRepository<Articles> {
    All(): Promise<Articles[]>;
    findById(id: string): Promise<Articles>;
}
