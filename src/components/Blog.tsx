import { heebo } from "@/utils/fonts";
import { Blogs } from "@/utils/content";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <section
      className={`${heebo.className} w-full h-[647px]  bg-[#EDF7FA] md:mb-8 text-[#21243D] md:h-[25rem] `}>
      <div className="w-full h-full md:max-w-6xl md:mx-auto md:grid md:place-content-center">
        <h3 className="w-full text-center text-lg py-2 md:py-0 md:p-2 md:ml-4 md:text-[] md:text-left">
          Recent Posts
        </h3>
        {/* <h3 className="text-lg text-center p-6 md:max-w-6xl md:mx-auto md:text-left md:bg-slate-600">
          Recent Posts
        </h3> */}

        <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-center">
          {Blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              label={blog.labels}
              date={blog.date}
              text={blog.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
