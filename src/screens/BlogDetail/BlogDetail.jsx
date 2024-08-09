import React, { useEffect, useState } from "react";
import algorithm from "../../assets/images/blog/algorithm.png";
import StarRating from "../../components/StarRating/StarRating";
import { useParams } from "react-router-dom";
import { getBlogs } from "../../services/apiBlogs";
import { useQuery } from "@tanstack/react-query";

const BlogDetail = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const { id } = useParams();
  const [sections, setSections] = useState([]);

  const selectedBlog = blogs?.find((blog) => blog.id == id);

  useEffect(() => {
    if (selectedBlog?.text) {
      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(selectedBlog.text, "text/html");

      // Extract all titles (example using `p` tags with titles)
      const titles = Array.from(doc.querySelectorAll("p")).map((p, index) => ({
        id: `section${index + 1}`,
        title: p.textContent,
      }));

      // Set the sections state with extracted titles
      setSections(titles);

      // Optionally, you can add IDs to the DOM elements in the parsed document
      titles.forEach((section, index) => {
        const element = doc.querySelectorAll("p")[index];
        if (element) {
          element.setAttribute("id", section.id);
        }
      });

      // Convert the modified document back to HTML string
      selectedBlog.text = doc.body.innerHTML;
    }
  }, [selectedBlog]);

  return (
    <div className="container max-w-[1320px] flex items-start justify-between mx-auto gap-8 my-36 font-iransans">
      <div className="w-1/3 max-lg:hidden">
        <img
          className="rounded-3xl"
          src={selectedBlog?.img || algorithm}
          alt=""
        />
        <div className="mt-10 pl-8">
          <p className="text-lg text-blue-500 font-semibold">
            راهنمای مقاله و فهرست مطالب
          </p>
          <ul className="mt-3 px-3 flex flex-col gap-2">
            {sections.map((section) => (
              <li
                key={section.id}
                className="px-3 py-2 bg-gray-200 rounded-2xl"
              >
                <p className="cursor-pointer">{section.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-2/3 max-lg:w-full">
        <h3 className="text-3xl font-black pr-0">{selectedBlog?.name}</h3>
        <div className="w-[500px] mx-auto mt-10 lg:hidden">
          <img className="w-full rounded-2xl" src={algorithm} alt="" />
        </div>
        <div className="blog-content px-6">
          <div dangerouslySetInnerHTML={{ __html: selectedBlog?.text }}></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
