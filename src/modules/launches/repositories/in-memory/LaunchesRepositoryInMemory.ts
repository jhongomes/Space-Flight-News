import { ICreateLaunchesDTO } from "../../dtos/ICreateLaunchesDTO";
import { Launches } from "../../infra/typeorm/entities/Launches";
import { ILaunchesRepository } from "../ILaunchesRepository";

class LaunchesRepositoryInMemory implements ILaunchesRepository {
    launches: Launches[] = [];

    async All(): Promise<Launches[]> {
        const all = this.launches;
        return all
    }

    async findById(id: string): Promise<Launches> {
        const launches = this.launches.find((launches) => launches.id === id)
        return launches
    }

    async findByProvider(provider: string): Promise<Launches> {
        const launches = this.launches.find((launches) => launches.provider === provider)
        return launches
    }

    async Create({
        id,
        provider
    }: ICreateLaunchesDTO): Promise<Launches> {
        const launches = new Launches();

        Object.assign(launches, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider
        })
        this.launches.push(launches);

        return launches;
    }

    async Update(launches: Launches): Promise<Launches> {
        this.launches.push(launches);
        return launches;
    }

    async Delete(launches: Launches): Promise<void> {
        const findIndex = this.launches.findIndex(launches => launches === launches)

        this.launches.splice(findIndex, 1)
    }
}
export { LaunchesRepositoryInMemory }