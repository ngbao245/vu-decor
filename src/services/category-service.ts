import type ApiResponse from "../apis/apiUtils"
import { del, get, post, put } from "../apis/apiUtils"
import type { CategoriesResult, CategoryModel } from "../types/category"

export default class CategoryService {
    private static instance: CategoryService

    private constructor() { }

    public static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService()
        }
        return CategoryService.instance
    }

    public async getAllCategories(): Promise<ApiResponse<CategoriesResult>> {
        try {
            const url = `/categories`
            const response = await get<CategoriesResult>(url)
            return response
        } catch (error) {
            console.error("Error fetching categories:", error)
            throw error
        }
    }

    public async createCategory(data: Omit<CategoryModel, "id">): Promise<ApiResponse<void>> {
        try {
            const response = await post<void>(`/categories`, data)
            console.log("Create category response:", response)
            return response
        } catch (error) {
            console.error(`Error creating new category:`, error)
            throw error
        }
    }

    public async updateCategory(id: string, data: Partial<CategoryModel>): Promise<ApiResponse<void>> {
        try {
            const response = await put<void>(`/categories/${id}`, data)
            console.log("Update category response:", response)
            return response
        } catch (error) {
            console.error(`Error updating category ${id}:`, error)
            throw error
        }
    }

    public async deleteCategory(id: string): Promise<ApiResponse<void>> {
        try {
            const response = await del<void>(`/categories/${id}`)
            return response
        } catch (error) {
            console.error(`Error deleting category ${id}:`, error)
            throw error
        }
    }
}