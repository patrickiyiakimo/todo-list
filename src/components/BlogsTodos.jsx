import React, { useEffect, useState } from "react";

const BlogsTodos = () => {
  const [blogs, setBlogs] = useState([]); // All fetched blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Blogs after filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data); // Initially, all blogs are shown
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on the search term
 useEffect(() => {
   const filtered = blogs.filter(
     (blog) => blog.title.includes(searchTerm) // it is case sensitive for matching of blogs
   );
   setFilteredBlogs(filtered);
   setCurrentPage(1); // Reset to the first page after filtering
 }, [searchTerm, blogs]);

  // Calculate the blogs to display on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="font-mont">
      <div>
        <h1 className="text-3xl my-20 md:text-6xl text-center font-bold">
          Check Out Our Latest Blogs
        </h1>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block mx-auto p-5 mb-5 border-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 m-5 shadow-2xl p-10 ">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="my-5 p-5 border-b-2">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="">{blog.content}</p>
            <p className="text-sm ">
              Published on: {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-20 flex justify-center space-x-3">
        {Array.from(
          { length: Math.ceil(filteredBlogs.length / blogsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 border ${
                currentPage === index + 1
                  ? "bg-gray-800 "
                  : "bg-white text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default BlogsTodos;
