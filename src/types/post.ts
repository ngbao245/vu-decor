export interface PostModel {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt?: string;
    isPublished: boolean;
    categoryId: string;
}
export interface PostsResult {
    items: PostModel[];
}