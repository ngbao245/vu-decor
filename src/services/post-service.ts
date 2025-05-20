import type ApiResponse from "../apis/apiUtils";
import { del, get, post, put } from "../apis/apiUtils";
import type { PostModel } from "../types/post";

export default class PostService {
  private static instance: PostService;

  private constructor() {}

  public static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService();
    }
    return PostService.instance;
  }

  public async getAllPosts(
    page = 1,
    limit = 2,
    sortBy = "id",
    order: "asc" | "desc" = "desc"
  ): Promise<{ items: PostModel[]; total: number }> {
    try {
      const url = `/posts?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`;
      const response = await get<PostModel[]>(url);

      if (response.success) {
        // Fetch total count
        const totalResponse = await get<PostModel[]>("/posts");
        const total = totalResponse.success ? totalResponse.result.length : 0;

        return {
          items: response.result,
          total: total,
        };
      }
      return { items: [], total: 0 };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { items: [], total: 0 };
    }
  }

  public async createPost(
    data: Omit<PostModel, "id">
  ): Promise<ApiResponse<void>> {
    try {
      const response = await post<void>(`/posts`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async updatePost(
    id: string,
    data: Partial<PostModel>
  ): Promise<ApiResponse<void>> {
    try {
      const response = await put<void>(`/posts/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async deletePost(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await del<void>(`/posts/${id}`);
      return response;
    } catch (error) {
      console.error(`Error deleting post ${id}:`, error);
      throw error;
    }
  }
}
