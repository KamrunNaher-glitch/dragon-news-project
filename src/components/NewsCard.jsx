


import { FaRegStar, FaStar } from 'react-icons/fa';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCard = (props = {}) => {
  const {news} = props || {}  ;
  return (
      <div className="card w-full my-10 p-6 bg-base-100 shadow-xl text-start space-y-5">
              <div className='space-y-2'>
              <div className='bg-[#F3F3F3] px-2  flex justify-between items-center'>
              <div className="flex items-center my-2 ">
          <img src={news.author.img} alt="Author" className="w-8 h-8 rounded-full mr-2"/>
          <div>
          <span className="text-sm">{news.author.name}</span>
        <p className=" text-sm text-gray-500 text-start">{new Date(news.author.published_date).toDateString()}</p>
            </div>
                  </div>
                  <div className='flex'>
                      <CiBookmark />
                      <CiShare2 />
                  </div>
             </div>
          <h2 className="card-title">{news.title}</h2>
              
          </div>
      <figure>
        <img src={news.thumbnail_url} alt="News" className=" mt-4 rounded-md bg-slate-400 aspect-video w-full object-top "/>
      </figure>
      <div className="">
       
              <p>{news.details}</p>
              <a className='text-orange-400'>Read More</a>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="rating rating-sm mr-2">
              {Array.from({ length: 5 }, (_, index) => (
                index < news.rating.number
                  ? <FaStar key={index} className="text-yellow-500"/>
                  : <FaRegStar key={index} className="text-yellow-500"/>
              ))}
            </div>
            <span>{news.rating.number}</span>
          </div>
          <span className="text-sm">{news.total_view} views</span>
        </div>
      </div>
    </div>
  );
};



export default NewsCard;