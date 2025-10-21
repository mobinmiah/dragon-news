import { FaRegEye, FaShareAlt, FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, author, title, details, thumbnail_url, rating, total_view } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString({
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-700">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-10 mt-5">
        <h3 className="font-bold text-lg leading-snug mb-3">{title}</h3>
        <figure className="rounded-xl overflow-hidden mb-3">
          <img src={thumbnail_url} alt={title} className="w-full h-[360px] object-cover" />
        </figure>
        <p className="text-accent text-sm leading-relaxed">
          {details.slice(0, 200)}...
          <Link
            to={`/newsdetails/${id}`}
            className="text-secondary font-medium cursor-pointer"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center border-t mt-4 p-4 text-sm">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
