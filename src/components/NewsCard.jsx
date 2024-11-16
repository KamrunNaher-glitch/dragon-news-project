
import { FaRegEye, FaRegStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = () => {
  return (
    <div className="card  bg-base-100 shadow-xl p-4">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-bold text-sm">Jimmy Dane</h2>
            <p className="text-xs text-gray-500">2022-08-24 17:27:34</p>
          </div>
        </div>
        <div className="badge badge-warning text-xs">Trending</div>
      </div>

      {/* Card Image */}
      <div className="mt-4">
        <img
          src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
          alt="News Thumbnail"
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>

      {/* Card Body */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
          Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)...
        </p>
        <button className="btn btn-link p-0 mt-2 text-primary text-sm">Read More</button>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <span className="ml-2 text-sm font-bold">4.5</span>
        </div>
        {/* Views */}
        <div className="flex items-center space-x-2">
          <FaRegEye />
          <span className="text-sm">488</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


