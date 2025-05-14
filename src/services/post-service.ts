import type ApiResponse from "../apis/apiUtils"
import { del, get, post, put } from "../apis/apiUtils"
import type { PostModel, PostsResult } from "../types/post"

export default class PostService {
    private static instance: PostService

    private constructor() { }

    public static getInstance(): PostService {
        if (!PostService.instance) {
            PostService.instance = new PostService()
        }
        return PostService.instance
    }

    public async getAllPosts(page = 1, limit = 2, sortBy = 'id', order = 'desc'): Promise<ApiResponse<PostsResult>> {
        try {
            const url = `/posts?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`
            const response = await get<PostsResult>(url)
            return response
        } catch (error) {
            console.error("Error fetching posts:", error)
            throw error
        }
    }

    public async createPost(data: Omit<PostModel, "id">): Promise<ApiResponse<void>> {
        try {
            const response = await post<void>(`/posts`, data)
            console.log("Create post response:", response)
            return response
        } catch (error) {
            console.error(`Error creating new post:`, error)
            throw error
        }
    }

    public async updatePost(id: string, data: Partial<PostModel>): Promise<ApiResponse<void>> {
        try {
            const response = await put<void>(`/posts/${id}`, data)
            console.log("Update post response:", response)
            return response
        } catch (error) {
            console.error(`Error updating post ${id}:`, error)
            throw error
        }
    }

    public async deletePost(id: string): Promise<ApiResponse<void>> {
        try {
            const response = await del<void>(`/posts/${id}`)
            return response
        } catch (error) {
            console.error(`Error deleting post ${id}:`, error)
            throw error
        }
    }
}