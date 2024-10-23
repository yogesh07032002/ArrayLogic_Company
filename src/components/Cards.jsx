/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card border-2 border-black w-full sm:w-80 md:w-96 shadow-xl bg-white ml-0 mr-auto">
          <figure className="px-3 pt-3">
            <img src={item.image} alt="Coming Soon" className="rounded-2xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-indigo-500">{item.name}</h2>
            <p className="text-rose-600">{item.title}</p>
            <Link to="/Contact" target="_blank">
              <div className="card-actions">
                <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-red-500 duration-300 cursor-pointer">
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
