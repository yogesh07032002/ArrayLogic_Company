function Cards({item}) {
  return (
    <>
      <div >
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={item.image}
              alt="comming Soon"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <div className="card-actions">
              <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Lets Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
