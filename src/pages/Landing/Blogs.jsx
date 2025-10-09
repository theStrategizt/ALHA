import React, { useState, useEffect } from "react";
import { Card } from "../../components/ui/Card";
import Axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Axios.get(
          "https://real-time-news-data.p.rapidapi.com/top-headlines",
          {
            params: {
              country: "NG",
              lang: "en",
            //   query: "agriculture", // single broad query
              limit: 20,
            },
            headers: {
              "x-rapidapi-key":
                "f7977fd7d9msh5e0a75b5ae25688p10e9e2jsne4f973872eee",
              "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
            },
          }
        );

        // Optional: filter client-side for "land" or "ALHA"
        const filtered = response.data.data.filter(
          (item) =>
            item.title.toLowerCase().includes("land") ||
            item.title.toLowerCase().includes("alha") ||
            item.snippet.toLowerCase().includes("land") ||
            item.snippet.toLowerCase().includes("alha")
        );

        setBlogs(filtered.length ? filtered : response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <section className="flex flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 sm:text-left max-w-[130em] mx-auto">
      <div className="flex flex-col space-y-6 w-full">
        <h2 className="text-2xl sm:text-5xl md:text-5xl font-medium leading-tight py-4 border-b border-gray-300">
          Latest <span className="text-[#66B5A9]">Agriculture News</span>
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6">
          {loading ? (
            <p>Loading...</p>
          ) : currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <a
                key={blog.link}
                href={blog.link}
                className="w-full md:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  {blog.photo_url && (
                    <img
                      src={blog.photo_url}
                      alt={blog.title}
                      className="mb-4 rounded"
                    />
                  )}
                  <h3 className="font-bold text-lg">{blog.title}</h3>
                  <p className="text-gray-600">{blog.snippet}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Source: {blog.source_name}
                  </p>
                </Card>
              </a>
            ))
          ) : (
            <p>No relevant news available.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
