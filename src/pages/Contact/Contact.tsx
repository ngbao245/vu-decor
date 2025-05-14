import { useEffect } from "react"
import CategoryService from "../../services/category-service"

export const Contact = () => {
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await CategoryService.getInstance().getAllCategories()
                console.log('Fetched categories:', response)
            } catch (error) {
                console.error('Error fetching categories:', error)
            }
        }
        fetchCategories()
    }, [])
    return (
        <>
            <h1>CONTACT</h1>
        </>
    )
}