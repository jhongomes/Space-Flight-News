import { ICreateArticlesDTO } from "../../dtos/ICreateArticlesDTO";
import { Articles } from "../../infra/typeorm/entities/Articles";
import { IArticlesRepository } from "../IArticlesRepository";

class ArticlesRepositoryInMemory implements IArticlesRepository {
    articles: Articles[] = [];

    async All(): Promise<Articles[]> {
        const all = this.articles;
        return all
    }

    async findById(id: string): Promise<Articles> {
        const articles = this.articles.find((articles) => articles.id === id)
        return articles
    }

    async Create({
        id,
        featured,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        launches_id,
        events_id,
    }: ICreateArticlesDTO): Promise<Articles> {
        const articles = new Articles();

        Object.assign(articles, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            featured,
            url,
            imageUrl,
            newsSite,
            summary,
            publishedAt,
            launches_id,
            events_id,
        })
        this.articles.push(articles);

        return articles;
    }

    async Update(articles: Articles): Promise<Articles> {
        this.articles.push(articles);
        return articles;
    }

    async Delete(articles: Articles): Promise<void> {
        const findIndex = this.articles.findIndex(articles => articles === articles)

        this.articles.splice(findIndex, 1)
    }
}
export { ArticlesRepositoryInMemory }