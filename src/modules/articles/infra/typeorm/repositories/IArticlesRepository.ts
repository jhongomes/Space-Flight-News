import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepository";
import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import { Articles } from "../entities/Articles";

class ArticlesRepository extends BaseRepository<Articles> implements IArticlesRepository {
    constructor() {
        super(Articles)
    }

    async All(): Promise<Articles[]> {
        const all = await this.repository.find({
            relations: ["launchesId", "eventsId"]
        });
        return all;
    }

    async findById(id: string): Promise<Articles> {
        const articles = await this.repository.findOne({ id }, {
            relations: ["launchesId", "eventsId"]
        })

        return articles;
    }
}
export { ArticlesRepository }