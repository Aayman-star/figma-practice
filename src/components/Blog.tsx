import { heebo } from "@/utils/fonts";
import { Blogs } from "@/utils/content";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <section
      className={`${heebo.className}w-full min-h-screen md:h-[350px] bg-[#EDF7FA] text-black pb-8`}>
      <h3 className="text-lg text-center p-6 md:max-w-6xl md:mx-auto md:text-left">
        Recent Posts
      </h3>
      <div className="w-full flex flex-col items-center md:max-w-6xl md:mx-auto md:flex-row md:items-center md:justify-center">
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
    </section>
  );
};

export default Blog;
