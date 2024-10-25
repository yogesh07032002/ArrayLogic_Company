/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>
      <div className="">
        <div className="card border-2 border-black w-full  md:w-96 shadow-xl bg-white  ">
          <figure className="px-3 pt-3 mb-0">
            <img src={item.image} alt="Coming Soon" className="rounded-2xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-orange-500">{item.name}</h2>
            <p className="text-gray-900 text-xs md:text-lg">{item.title}</p>
            <Link to="/Contact" target="_blank">
              <div className="card-actions">
                <button className="bg-violet-700 md:mt-1 text-white px-2 py-1.5 rounded-md hover:bg-red-500 duration-300 cursor-pointer">
                  Lets Connect
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
