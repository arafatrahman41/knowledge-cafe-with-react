import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            className="w-12 rounded-full h-12 object-cover"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {
            hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
        }
        </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
