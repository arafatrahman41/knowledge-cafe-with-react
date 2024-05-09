import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
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
      <img className="rounded-lg mt-6" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center my-5">
          <img
            className="w-12 rounded-full h-12 object-cover"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-xl font-medium">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="font-medium space-x-2">
          <span>{reading_time} min read</span>
          <button onClick={handleAddToBookmark} className="text-2xl align-middle text-red-600"> <CiBookmark></CiBookmark> </button>
        </div>
      </div>
      <h2 className="text-3xl mb-4 font-bold">{title}</h2>
      
      <p className="mb-4 text-lg font-semibold text-gray-500">
        {
            hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
        }
        </p>
        <hr />
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired
};

export default Blog;
