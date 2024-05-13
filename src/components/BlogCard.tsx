type BlogProps = {
  id: number;
  title: string;
  label: string;
  date: string;
  text: string;
};
const BlogCard = ({ id, title, label, date, text }: BlogProps) => {
  return (
    <section className="bg-white m-4 p-4 md:w-[418px] md:h-[295px]">
      <h3 className="font-bold text-[22px] md:text-[26px] md:w-[374] md:h-[85px]">
        {title}
      </h3>
      <div className="mt-2 flex items-center space-x-8">
        <div className="text-base ">{date}</div>
        <div>
          <p>|</p>
        </div>
        <div className="text-base ">{label}</div>
      </div>
      <p className="mt">{text}</p>
    </section>
  );
};

export default BlogCard;
