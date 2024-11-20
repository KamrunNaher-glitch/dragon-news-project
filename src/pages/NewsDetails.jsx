import { Link, useLoaderData } from "react-router-dom";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";
const NewsDetails = () => {
    const data = useLoaderData();
    const news =data.data[0];
    console.log(news);
    return (
        <div>
           <header>
            <Navbar></Navbar>
           </header>
           <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
            <section className="col-span-9">
            <h2 className="font-semibold mb-3">Dragon News</h2>
            {/* Card Section Starts */}
                <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                     <img
                    src={news?.image_url}
                 alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                 <h2 className="card-title">{news?.title}</h2>
                 <p>{news?.details}</p>
                    <div className="card-actions">
                    <Link to={`/category/${news?.category_id}`} className="btn btn-neutral text-2xl px-10 mt-2 ">Back</Link>
                </div>
                </div>
                </div>
            {/* card section ends  */}
            </section>
            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;