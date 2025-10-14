import React, { useState, useEffect, useMemo } from "react";
import { Card } from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API_URL = "https://real-time-news-data.p.rapidapi.com/top-headlines";
const API_HEADERS = {
  "x-rapidapi-key": "f7977fd7d9msh5e0a75b5ae25688p10e9e2jsne4f973872eee",
  "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const { data } = await Axios.get(API_URL, {
          params: { country: "NG", lang: "en", limit: 20 },
          headers: API_HEADERS,
        });

        const keywords = ["land", "alha"];
        const filtered = data.data.filter((item) =>
          keywords.some((kw) =>
            (item.title + item.snippet).toLowerCase().includes(kw)
          )
        );

        setBlogs(filtered.length ? filtered : data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const totalPages = useMemo(
    () => Math.ceil(blogs.length / blogsPerPage),
    [blogs.length]
  );

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    return blogs.slice(start, end);
  }, [blogs, currentPage, blogsPerPage]);

  return (
    <section className="flex flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 max-w-[130em] mx-auto">
      <div className="flex flex-col space-y-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-300 py-6">
          <h2 className="text-2xl sm:text-5xl font-medium leading-tight">
            Latest <span className="text-[#32B466]">News</span>
          </h2>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-30"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        {/* Blogs Section */}
        <div className="flex flex-wrap gap-4 mt-6">
          {loading ? (
            <p className="text-center text-gray-500 py-12">Loading news...</p>
          ) : currentBlogs.length > 0 ? (
            <div
              className="
    grid 
    grid-cols-1       /* Mobile */
    sm:grid-cols-2     /* Small devices (≥640px, phones in landscape) */
    md:grid-cols-3     /* Tablets (≥768px) */
    lg:grid-cols-4     /* Laptops and desktops (≥1024px) */
    gap-4              /* Default gap */
    sm:gap-6           /* Slightly larger on small+ screens */
    md:gap-8           /* More spacing on tablets and above */
    w-full
  
            
              "
            >
              {currentBlogs.map((blog) => (
                <a
                  key={blog.link}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Card
                    className="
          bg-white 
          rounded-2xl 
          shadow-sm 
          hover:shadow-lg 
          transition-all 
          duration-300 
          overflow-hidden 
          border 
          border-gray-100
          h-full
          flex 
          flex-col
        "
                  >
                    {blog.photo_url && (
                      <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden">
                        <img
                          src={blog.photo_url}
                          alt={blog.title || "Blog image"}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 rounded-md"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3 ">
                      {/* UTC Date */}
                      <span className="text-[0.7rem] sm:text-xs font-medium rounded-md w-fit bg-[#FEF5DF] text-gray-600 px-2 py-1 block">
                        Date:&nbsp;
                        {new Date(
                          blog.published_datetime_utc
                        ).toLocaleDateString("en-US", {
                          dateStyle: "medium",
                        })}
                      </span>

                      <h3
                        className="
              font-semibold 
              text-md 
              sm:text-base 
              leading-snug 
              line-clamp-2 
              text-gray-800
            "
                      >
                        {blog.title}
                      </h3>

                      <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                        {blog.snippet}
                      </p>

                      <p className="text-[0.7rem] sm:text-xs text-gray-400 pt-2">
                        Source: {blog.source_name}
                      </p>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">
              No relevant news available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
