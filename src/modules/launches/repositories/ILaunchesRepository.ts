import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Launches } from "../infra/typeorm/entities/Launches";

export interface ILaunchesRepository extends IBaseRepository<Launches> {
    All(): Promise<Launches[]>;
    findById(id: string): Promise<Launches>;
}
