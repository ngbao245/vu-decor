export interface CategoryModel {
    id: string;
    slug: string;
    name: string;
    description: string;
}
export interface CategoriesResult {
    items: CategoryModel[];
}