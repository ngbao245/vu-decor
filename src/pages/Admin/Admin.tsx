import { useState, useEffect } from "react";
import PostService from "../../services/post-service";
import CategoryService from "../../services/category-service";
import type { PostModel } from "../../types/post";
import type { CategoryModel } from "../../types/category";
import parse from 'html-react-parser';

export const Admin = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "categories">("posts");
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [selectedPost, setSelectedPost] = useState<PostModel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await PostService.getInstance().getAllPosts(
        currentPage,
        pageSize,
        "id",
        "desc"
      );

      setPosts(response.items);
      setTotalPages(Math.ceil(response.total / pageSize));
    } catch (error) {
      setPosts([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await CategoryService.getInstance().getAllCategories();
      const data = Array.isArray(response)
        ? response
        : response.result?.items || response.result || [];

      setCategories(data);
    } catch (error) {
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "posts") {
      fetchPosts();
    } else {
      fetchCategories();
    }
  }, [activeTab, currentPage]);

  const handleDeletePost = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await PostService.getInstance().deletePost(id);
        if (response.success) {
          fetchPosts();
        }
      } catch (error) {
        // Handle error silently
      }
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await CategoryService.getInstance().deleteCategory(id);
        if (response.success) {
          fetchCategories();
        }
      } catch (error) {
        // Handle error silently
      }
    }
  };

  const handleViewDetails = (post: PostModel) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {["posts", "categories"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => {
                setActiveTab(tab as "posts" | "categories");
                setCurrentPage(1);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === "posts" ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Manage Posts</h2>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => {
                    // TODO: Implement new post modal
                  }}
                >
                  New Post
                </button>
              </div>

              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Category ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Created At
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {posts.map((post) => (
                          <tr key={post.id}>
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium text-gray-900">
                                {post.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {post.slug}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                                  post.isPublished
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {post.isPublished ? "Published" : "Draft"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {post.categoryId}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {new Date(post.createdAt).toLocaleDateString()}
                              </div>
                              {post.updatedAt && (
                                <div className="text-xs text-gray-500">
                                  Updated:{" "}
                                  {new Date(post.updatedAt).toLocaleDateString()}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                className="text-blue-600 hover:text-blue-900 mr-4"
                                onClick={() => handleViewDetails(post)}
                              >
                                View Details
                              </button>
                              <button
                                className="text-blue-600 hover:text-blue-900 mr-4"
                                onClick={() => {
                                  // TODO: Implement edit
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="text-red-600 hover:text-red-900"
                                onClick={() => handleDeletePost(post.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center mt-4 space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Items per page:</span>
                      <select
                        value={pageSize}
                        onChange={(e) => {
                          setPageSize(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                      </select>
                    </div>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      Previous
                    </button>

                    <div className="flex space-x-2">
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`px-3 py-1 rounded ${
                            currentPage === index + 1
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Manage Categories</h2>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => {
                    // TODO: Implement new category modal
                  }}
                >
                  New Category
                </button>
              </div>

              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Slug
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {categories.map((category) => (
                      <tr key={category.id}>
                        <td className="px-6 py-4">{category.name}</td>
                        <td className="px-6 py-4">{category.slug}</td>
                        <td className="px-6 py-4">
                          {category.description || "-"}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            className="text-blue-600 hover:text-blue-900 mr-4"
                            onClick={() => {
                              // TODO: Implement edit
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>

        {/* View Details Modal */}
        {isModalOpen && selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {selectedPost.imageUrl && (
                <div className="mb-4">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Summary</h3>
                <p className="text-gray-700">{selectedPost.summary}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Content</h3>
                <div className="text-gray-700 prose max-w-none">
                  {parse(selectedPost.content)}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
