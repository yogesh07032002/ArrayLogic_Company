/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Cards({item}) {
  return (
    <>
      <div >
        <div className="card bg-base-100 w-96 shadow-xl ">
          <figure className="px-10 pt-10">
            <img
              src={item.image}
              alt="comming Soon"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-indigo-500">{item.name}</h2>
            <p className="text-rose-600">{item.title}</p>
           <Link to="/Contact" target="_blank">
           <div className="card-actions">
              <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-red-500 duration-300 cursor-pointer">Lets Connect</button>
            </div>
           </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
