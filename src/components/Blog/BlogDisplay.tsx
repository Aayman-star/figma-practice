import React from "react";
import { heebo } from "@/utils/fonts";
import { BlogContent } from "@/utils/content";

type BlogProps = {
  id: number;
  title: string;
  date: string;
  label: string;
  text: string;
};

const BlogDisplay = () => {
  return (
    <div className="w-full">
      {BlogContent.map((blog) => (
        <div key={blog.id}>
          <div className={`${heebo.className}  p-5 md:px-28 md:py-10`}>
            <h3 className="text-[#21243D] font-medium text-[1.6270rem] md:text-3xl md:mb-4">
              {blog.title}
            </h3>
            <div className="flex items-center space-x-4 md:space-x-10 mb-4">
              {" "}
              <p className="text-[#21243D] text-base md:text-xl">{blog.date}</p>
              <p className="text-[#21243D]">|</p>
              <p className="text-[#8695A4] text-base md:text-xl">
                {blog.label}
              </p>
            </div>

            <p className="text-[#21243D] text-base">{blog.text}</p>
          </div>
          <hr className="w-[80%] mx-auto h-px bg-[#E0E0E0]" />
        </div>
      ))}
    </div>
  );
};

export default BlogDisplay;
