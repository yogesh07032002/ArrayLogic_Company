import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>0){
      setSticky(true)
    }
    else{
      setSticky(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return ()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[])
  const navItems = (
    <>
      <li>
        <a >Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Process</a>
      </li>
      <li>
        <a>Industries</a>
      </li>
      <li>
        <a>Carrier</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div className={`max-w-screen-2xl container max-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
        ? "sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out":""
        }`}>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className=" text-4xl font-bold cursor-pointer">LiftLogic</a>
          </div>
          <div className="navbar-end px-0">
       
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  px-5 mx-24">{ navItems }</ul>
          </div>
          <div className="">
            <a className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Button</a>
          </div>
        </div>
             
        </div>
      </div>
    </>
  );
}

export default Navbar;
