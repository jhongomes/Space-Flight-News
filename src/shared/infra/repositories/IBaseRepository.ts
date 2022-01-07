export interface IBaseRepository<T> {
    Create(entity: T): Promise<T>;
    Update(entity: T): Promise<T>;
    Delete(entity: T): Promise<void>;
}