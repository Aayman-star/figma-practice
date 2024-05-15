import React from "react";
import Wrapper from "../Wrapper";
import { heebo } from "@/utils/fonts";
import BlogDisplay from "./BlogDisplay";

const BlogPage = () => {
  return (
    <Wrapper>
      <div className={`${heebo.className} w-full md:px-28 md:py-10`}>
        <h1 className="-ml-[3rem] md:-ml-0 text-[1.875rem] md:text-[2.75rem] font-bold text-[#21243D]">
          Blog
        </h1>
      </div>
      <BlogDisplay />
    </Wrapper>
  );
};

export default BlogPage;
