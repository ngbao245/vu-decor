import type ApiResponse from "../apis/apiUtils"
import { del, get, post, put } from "../apis/apiUtils"
import type { CategoryModel, CategoriesResult } from "../types/category"

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
            console.log('Fetching categories...')
            const response = await get<CategoriesResult>('/categories')
            console.log('Categories API Response:', response)
            return response
        } catch (error) {
            console.error("Error fetching categories:", error)
            throw error
        }
    }

    public async createCategory(data: Omit<CategoryModel, "id" | "createdAt" | "updatedAt">): Promise<ApiResponse<void>> {
        try {
            const response = await post<void>('/categories', data)
            return response
        } catch (error) {
            console.error("Error creating category:", error)
            throw error
        }
    }

    public async updateCategory(id: string, data: Partial<CategoryModel>): Promise<ApiResponse<void>> {
        try {
            const response = await put<void>(`/categories/${id}`, data)
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