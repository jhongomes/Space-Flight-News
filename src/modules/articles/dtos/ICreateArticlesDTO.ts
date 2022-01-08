
export interface ICreateArticlesDTO {
    id?: string;
    featured: boolean;
    url: string;
    imageUrl?: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches_id: string;
    events_id: string;
}