import React from "react";
import { heebo } from "@/utils/fonts";

type BlogProps = {
  id: number;
  title: string;
  date: string;
  label: string;
  text: string;
};
const BlogContent = [
  {
    id: 1,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    label: "Express, handlebars",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    id: 2,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    label: "Express, handlebars",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    id: 3,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    label: "Express, handlebars",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];

const BlogDisplay = () => {
  return (
    <div className="w-full">
      {BlogContent.map((blog) => (
        <div className={`${heebo.className}  md:px-28 md:py-10`} key={blog.id}>
          <h3 className="text-[#21243D] font-medium text-[1.6270rem] md:text-3xl mb-4">
            {blog.title}
          </h3>
          <div className="flex items-center space-x-10 mb-4">
            {" "}
            <p className="text-[#21243D] text-xl">{blog.date}</p>
            <p>|</p>
            <p className="text-[#8695A4] text-xl">{blog.label}</p>
          </div>

          <p className="text-[#21243D] text-base">{blog.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDisplay;
